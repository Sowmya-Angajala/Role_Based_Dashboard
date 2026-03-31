"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
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


    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account </h2>

        <div className="input-group">
          <label>Name</label>
          <input placeholder="Enter your name"
            onChange={(e)=>setForm({...form,name:e.target.value})}/>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input placeholder="Enter your email"
            onChange={(e)=>setForm({...form,email:e.target.value})}/>
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input placeholder="Enter your phone"
            onChange={(e)=>setForm({...form,phone:e.target.value})}/>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password"
            onChange={(e)=>setForm({...form,password:e.target.value})}/>
        </div>

        <button className="btn full" onClick={handleSignup}>
          Signup
        </button>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}