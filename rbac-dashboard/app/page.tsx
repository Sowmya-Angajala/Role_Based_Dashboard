"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-container">
      
      {/* HERO SECTION */}
      <div className="hero">
        <h1 className="hero-title">RBAC Dashboard</h1>
        <p className="hero-subtitle">
          Manage users, roles, and permissions with a clean and powerful dashboard.
        </p>

        <div className="hero-buttons">
          <button onClick={() => router.push("/login")} className="btn">
            Login
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="btn outline"
          >
            Signup
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <div className="feature-card">
          <h3>🔐 Secure Authentication</h3>
          <p>JWT based login system with encrypted passwords.</p>
        </div>

        <div className="feature-card">
          <h3>👥 Role Management</h3>
          <p>Super Admin, Admin, and User roles with full control.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Dashboard Control</h3>
          <p>Manage users and data with interactive dashboards.</p>
        </div>
      </div>
    </div>
  );
}