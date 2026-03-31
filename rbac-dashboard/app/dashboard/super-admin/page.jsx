"use client";
import { useEffect, useState } from "react";
import UserCard from "../../componets/UserCard";

export default function SuperAdmin() {
  const [admins, setAdmins] = useState([]);
  const [user, setUser] = useState({ name: "Super Admin", email: "admin@gmail.com", role: "SUPER_ADMIN" });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    const res = await fetch("/api/admin", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    setAdmins(data);
  };

  return (
    <div className="container">
      <UserCard user={user} />

      <div className="card">
        <h2 className="title">Admins List</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((a) => (
              <tr key={a._id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}