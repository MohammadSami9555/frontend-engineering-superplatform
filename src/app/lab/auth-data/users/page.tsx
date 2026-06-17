"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/features/auth-data/services/userService";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] =
    useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-3xl font-bold">
        Loading Users...
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1
            className="
              text-5xl
              font-bold
              transition-all
              duration-300
              hover:text-[#4fea47]
            "
          >
            Users List
          </h1>

          <p className="text-zinc-400 mt-2">
            Real API Data using Axios
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            max-w-md
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            outline-none
            transition-all
            duration-300
            focus:border-[#4fea47]
            focus:shadow-[0_0_15px_rgba(79,234,71,0.25)]
          "
        />

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              p-6
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#4fea47]/50
              hover:shadow-[0_0_25px_rgba(79,234,71,0.2)]
            "
          >
            <p className="text-zinc-400">
              Total Users
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              {users.length}
            </h2>
          </div>

          <div
            className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              p-6
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#4fea47]/50
              hover:shadow-[0_0_25px_rgba(79,234,71,0.2)]
            "
          >
            <p className="text-zinc-400">
              Filtered Users
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              {filteredUsers.length}
            </h2>
          </div>

          <div
            className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              p-6
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#4fea47]/50
              hover:shadow-[0_0_25px_rgba(79,234,71,0.2)]
            "
          >
            <p className="text-zinc-400">
              API Status
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              Active
            </h2>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() =>
                setSelectedUser(user)
              }
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                cursor-pointer
                hover:translate-x-2
                hover:border-[#4fea47]/50
                hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(79,234,71,0.15)]
              "
            >
              <h2 className="text-2xl font-bold">
                {user.firstName}{" "}
                {user.lastName}
              </h2>

              <p className="text-zinc-400 mt-3">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
          "
        >
          <div
            className="
              w-full
              max-w-lg
              rounded-3xl
              border
              border-white/10
              bg-[#0b1020]
              p-8
              shadow-[0_0_30px_rgba(79,234,71,0.2)]
            "
          >
            <h2 className="text-3xl font-bold">
              {selectedUser.firstName}{" "}
              {selectedUser.lastName}
            </h2>

            <p className="mt-4 text-zinc-400">
              📧 {selectedUser.email}
            </p>

            <p className="mt-2 text-zinc-400">
              🆔 User ID: {selectedUser.id}
            </p>

            <button
              onClick={() =>
                setSelectedUser(null)
              }
              className="
                mt-6
                rounded-xl
                bg-[#4fea47]
                px-6
                py-3
                text-black
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}