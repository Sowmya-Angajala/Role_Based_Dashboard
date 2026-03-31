"use client";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <h3 className="greeting"> Hey, Welcome {user?.name}</h3>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}