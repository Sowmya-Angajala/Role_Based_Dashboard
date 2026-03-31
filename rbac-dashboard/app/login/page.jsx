"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        return;
      }


      localStorage.setItem("token", data.token);

      if (data.role === "SUPER_ADMIN") router.push("/dashboard/super-admin");
      if (data.role === "ADMIN") router.push("/dashboard/admin");
      if (data.role === "USER") router.push("/dashboard/user");

    } catch (err) {
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back </h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button className="btn full" onClick={handleLogin}>
          Login
        </button>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={() => router.push("/signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}