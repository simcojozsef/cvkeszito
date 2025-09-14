import React, { useState } from "react";
import Footer from "../Components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/login", {
        method: "POST",
        credentials: "include", // important to keep session cookie
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Successful login, redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        setError(data.message || "Hiba történt a bejelentkezés során.");
      }
    } catch (err) {
      setError("Hálózati hiba. Próbáld újra.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        <h1>Bejelentkezés</h1>

        {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Jelszó</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Bejelentkezés..." : "Bejelentkezés"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
