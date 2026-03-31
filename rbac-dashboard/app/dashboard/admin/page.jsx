"use client";
import { useEffect, useState } from "react";
import UserCard from "../../componets/UserCard";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "Admin", email: "admin@gmail.com", role: "ADMIN" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("/api/user", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="container">
      <UserCard user={user} />

      <div className="card">
        <h2 className="title">Users List</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}