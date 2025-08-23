import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import AuthContext from '../components/store/Auth-context'; 
import classes from "./AuthForm.module.css";

const FIREBASE_API_KEY = "AIzaSyB4flsAj8dncQ1rBlo5DUqgFkHIbb5vZMo";

export default function Login() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || "Login failed");

      authCtx.login(data.idToken);
      navigate("/", { replace: true }); // ✅ v6 redirect
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <div className={classes.card}>
        <h1 className={classes.title}>Login</h1>
        {err && <div className={classes.error}>{err}</div>}
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.actions}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing in…" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
