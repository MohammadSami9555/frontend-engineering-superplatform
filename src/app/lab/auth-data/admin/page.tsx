"use client";

import { useState } from "react";
import ProtectedRoute from "@/features/auth-data/components/ProtectedRoute";
import RoleGuard from "@/features/auth-data/components/RoleGuard";
import { useAuthStore } from "@/features/auth-data/store/authStore";
import { useOrderStore } from "@/features/auth-data/store/orderStore";

export default function AdminPage() {
  const user = useAuthStore((state) => state.user);
  const [searchUser, setSearchUser] =
  useState("");
  const orders = useOrderStore(
    (state) => state.orders
  );

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (total, order) => total + order.totalPrice,
    0
  );

  return (
    <ProtectedRoute>
      <RoleGuard role="admin">
        <div className="space-y-8">

          {/* Header */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h1 className="text-5xl font-bold mb-3">
              Admin Dashboard
            </h1>

            <p className="text-zinc-400 text-lg">
              Welcome back, {user?.name}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-zinc-400">
                Total Users
              </p>

              <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
                1
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-zinc-400">
                Revenue
              </p>

              <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
                ₹{totalRevenue.toFixed(2)}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-zinc-400">
                Total Orders
              </p>

              <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
                {totalOrders}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-zinc-400">
                Security Score
              </p>

              <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
                100%
              </h2>
            </div>

          </div>
          {/* Analytics Section */}
<div className="grid md:grid-cols-3 gap-6">

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
  Today&apos;s Revenue
</p>

    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
      ₹{totalRevenue.toFixed(2)}
    </h2>

    <p className="text-green-400 mt-2">
      +12% Growth
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Monthly Orders
    </p>

    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
      {totalOrders}
    </h2>

    <p className="text-green-400 mt-2">
      Active Sales
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Conversion Rate
    </p>

    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
      92%
    </h2>

    <p className="text-green-400 mt-2">
      Excellent
    </p>
  </div>

</div>

          {/* Recent Activity */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-[#4fea47]">
                  ✓
                </span>

                <span>
                  Admin Login Successful
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#4fea47]">
                  ✓
                </span>

                <span>
                  JWT Token Verified
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#4fea47]">
                  ✓
                </span>

                <span>
                  Role Access Granted
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#4fea47]">
                  ✓
                </span>

                <span>
                  Protected Route Active
                </span>
              </div>

            </div>
            {/* System Health */}
<div className="mt-10">

  <h3 className="text-2xl font-bold mb-4">
    System Health
  </h3>

  <div className="grid md:grid-cols-3 gap-4">

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-zinc-400">
        API Status
      </p>

      <p className="text-green-400 font-bold mt-2">
        🟢 Online
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-zinc-400">
        Database
      </p>

      <p className="text-green-400 font-bold mt-2">
        🟢 Connected
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-zinc-400">
        Auth Service
      </p>

      <p className="text-green-400 font-bold mt-2">
        🟢 Active
      </p>
    </div>

  </div>

</div>

            {/* Recent Orders */}
            <div className="mt-10">

              <h3 className="text-2xl font-bold mb-4">
                Recent Orders
              </h3>

              {orders.length === 0 ? (
                <div className="rounded-2xl bg-black/20 p-6 text-zinc-400">
                  No Orders Yet
                </div>
              ) : (
                <div className="space-y-3">

                  {orders
                    .slice()
                    .reverse()
                    .slice(0, 5)
                    .map((order) => (
                      <div
                        key={order.id}
                        className="
                          flex
                          justify-between
                          items-center
                          rounded-2xl
                          bg-black/20
                          p-4
                        "
                      >
                        <div>
                          <p className="font-semibold">
                            #{order.id.slice(0, 8)}
                          </p>

                          <p className="text-sm text-zinc-400">
                            {order.date}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[#4fea47] font-bold">
                            ₹{order.totalPrice.toFixed(2)}
                          </p>

                          <p className="text-xs text-zinc-400 uppercase">
                            {order.paymentMethod}
                          </p>
                        </div>
                      </div>
                    ))}

                </div>
              )}

            </div>
             {/* User Management */}

<div className="mt-10">
  <h3 className="text-2xl font-bold mb-4">
    User Management
  </h3>

  <input
    type="text"
    placeholder="Search User..."
    value={searchUser}
    onChange={(e) =>
      setSearchUser(e.target.value)
    }
    className="
      w-full
      mb-4
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-4
      py-3
      outline-none
      focus:border-[#4fea47]
    "
  />

  <div className="rounded-3xl border border-white/10 bg-black/20 overflow-hidden">

    <div className="grid grid-cols-4 p-4 border-b border-white/10 font-semibold">
      <div>Name</div>
      <div>Email</div>
      <div>Role</div>
      <div>Status</div>
    </div>

    <div className="grid grid-cols-4 p-4 border-b border-white/5">
      <div>Mohammad Sami</div>
      <div>admin@test.com</div>
      <div className="text-[#4fea47]">
        Admin
      </div>
      <div className="text-green-400">
        Active
      </div>
    </div>

    <div className="grid grid-cols-4 p-4">
      <div>Demo User</div>
      <div>user@test.com</div>
      <div>User</div>
      <div className="text-green-400">
        Active
      </div>
    </div>

  </div>
</div>
</div>
</div>
      </RoleGuard>
    </ProtectedRoute>
  );
}