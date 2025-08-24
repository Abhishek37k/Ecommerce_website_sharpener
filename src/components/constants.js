export const CRUDCRUD_BASE = import.meta.env.VITE_CRUDCRUD_BASE;

export const sanitizeEmail = (email) => (email || "").replace(/[@.]/g, "");

export const getUserKey = () => sanitizeEmail(localStorage.getItem("email"));
console.log("CRUDCRUD_BASE:", CRUDCRUD_BASE);