"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  email: string;
}

export default function CSRDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://dummyjson.com/users?limit=30"
      );

      const data = await response.json();

      setUsers(data.users);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          CSR Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Client Side Rendering Analytics
        </p>
      </div>

      {/* Main Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Rendering Type
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            CSR
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            API Source
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Live
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Users Loaded
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            {users.length}
          </h2>
        </div>

      </div>

      {/* CSR Metrics */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-3xl bg-white/5 p-6">
          <p className="text-zinc-400">
            Hydration
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            100%
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <p className="text-zinc-400">
            API Calls
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            {users.length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <p className="text-zinc-400">
            Response
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            95ms
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6">
          <p className="text-zinc-400">
            State
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Active
          </h2>
        </div>

      </div>

      {/* Users */}

      <div className="space-y-4">

        <h2 className="text-4xl font-bold">
          Live Users
        </h2>

        {loading ? (
          <div className="rounded-3xl bg-white/5 p-8">
            Loading Users...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {users.map((user) => (
              <div
                key={user.id}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <h3 className="text-xl font-bold">
                  {user.firstName}
                </h3>

                <p className="text-zinc-400 mt-2">
                  {user.email}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}