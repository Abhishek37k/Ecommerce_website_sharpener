import { createContext, useState, useCallback } from "react";
import { CRUDCRUD_BASE, getUserKey } from "../constants";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // GET all items for current user
  const loadCart = useCallback(async () => {
    const key = getUserKey();
    if (!key || !CRUDCRUD_BASE) return;

    try {
      const res = await fetch(`${CRUDCRUD_BASE}/cart${key}`);
      if (!res.ok) throw new Error("GET failed");
      const data = await res.json();
      const normalized = data.map((x) => ({
        _id: x._id,
        title: x.title,
        price: x.price,
        imageUrl: x.imageUrl,
        quantity: x.quantity ?? 1,
      }));
      setCartItems(normalized);
    } catch (e) {
      console.error("loadCart:", e);
    }
  }, []);

  // POST one item; keep your duplicate-by-title rule
  const addToCart = async (newItem) => {
    console.log("addToCart called with:", newItem);
    setCartItems((prev) => {
      const exists = prev.some((i) => i.title === newItem.title);
      if (exists) {
        alert("Item already in cart");
        return prev;
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });

    const key = getUserKey();
    console.log("User key:", key);
    console.log("CRUDCRUD_BASE:", CRUDCRUD_BASE);
    if (!key || !CRUDCRUD_BASE) return;

    try {
      const response = await fetch(`${CRUDCRUD_BASE}/cart${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newItem, quantity: 1 }),
      });
      console.log("Fetch response status:", response.status);
    } catch (e) {
      console.warn("addToCart POST failed:", e);
    }
  };

  // DELETE by _id when available; fallback by title
  const removeFromCart = async (titleOrItem) => {
    const title =
      typeof titleOrItem === "string" ? titleOrItem : titleOrItem.title;
    const item =
      typeof titleOrItem === "string"
        ? cartItems.find((x) => x.title === title) || { title }
        : titleOrItem;

    // remove locally first
    setCartItems((prev) => prev.filter((x) => x.title !== title));

    const key = getUserKey();
    if (!key || !CRUDCRUD_BASE) return;

    try {
      let id = item._id;
      if (!id) {
        const res = await fetch(`${CRUDCRUD_BASE}/cart/${key}`);
        if (res.ok) {
          const data = await res.json();
          const match = data.find((x) => x.title === title);
          id = match?._id;
        }
      }
      if (id) {
        await fetch(`${CRUDCRUD_BASE}/cart${key}/${id}`, { method: "DELETE" });
      }
    } catch (e) {
      console.warn("removeFromCart DELETE failed:", e);
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        loadCart,
        setCartItems, // optional
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
