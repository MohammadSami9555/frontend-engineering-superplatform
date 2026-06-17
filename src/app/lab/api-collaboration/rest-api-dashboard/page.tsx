"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import UserAnalyticsChart from "../../../../features/api-collaboration/components/UserAnalyticsChart";
import UserModal from "@/features/api-collaboration/components/UserModal";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: {
    name: string;
  };
}

export default function RestApiDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://dummyjson.com/users?limit=30"
      );

      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const companyCount = new Set(
    users.map((user) => user.company.name)
  ).size;

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(
    firstUserIndex,
    lastUserIndex
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">
          REST API Dashboard
        </h1>

        <button
          onClick={fetchUsers}
          className="px-5 py-3 rounded-xl bg-[#4fea47] text-black font-semibold hover:scale-105 transition"
        >
          Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">Total Users</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            {users.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">Companies</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            {companyCount}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">API Status</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            Online
          </h2>
        </div>
      </div>

      {/* Analytics Chart */}
      <UserAnalyticsChart
        totalUsers={users.length}
        totalCompanies={companyCount}
        filteredUsers={filteredUsers.length}
      />

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none focus:border-[#4fea47] transition"
        />
      </div>

      {/* Users Grid */}
      {loading ? (
        <div className="text-center text-xl">
          Loading Users...
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <div
              key={user.id}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:scale-105
                hover:border-[#4fea47]/40
                hover:shadow-[0_0_30px_rgba(79,234,71,0.25)]
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src={user.image}
                  alt={user.firstName}
                  width={64}
                  height={64}
                  className="rounded-full border border-[#4fea47]/30 object-cover"
                  unoptimized
                />

                <div>
                  <h2 className="text-xl font-bold">
                    {user.firstName} {user.lastName}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <p>🏢 {user.company.name}</p>
                <p>📞 {user.phone}</p>
              </div>

              <button
                onClick={() => setSelectedUser(user)}
                className="
                  mt-6
                  w-full
                  rounded-xl
                  bg-[#4fea47]
                  text-black
                  py-3
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-10 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-10 w-10 rounded-xl font-semibold transition ${
              currentPage === i + 1
                ? "bg-[#4fea47] text-black"
                : "bg-white/5 text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}