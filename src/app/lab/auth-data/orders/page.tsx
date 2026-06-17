"use client";

import Link from "next/link";
import { useOrderStore } from "@/features/auth-data/store/orderStore";

export default function OrdersPage() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          Order History
        </h1>

        <p className="text-zinc-400 mt-2">
          View all your previous orders
        </p>
      </div>

      {orders.length === 0 ? (
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-12
            text-center
          "
        >
          <h2 className="text-3xl font-bold">
            No Orders Yet
          </h2>

          <p className="text-zinc-400 mt-4">
            Complete your first purchase to see
            order history.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                hover:border-[#4fea47]/30
                transition-all
              "
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold tracking-wide">
                    🛒 Order #{order.id.slice(0, 8)}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {order.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-zinc-400">
                    Payment Method
                  </p>

                  <p className="font-semibold uppercase">
                    {order.paymentMethod}
                  </p>

                  <p
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      mt-3
                      rounded-full
                      bg-[#4fea47]/10
                      text-[#4fea47]
                      font-semibold
                      border
                      border-[#4fea47]/20
                    "
                  >
                    ● Delivered
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-2xl bg-black/20 p-6">
                  <p className="text-zinc-400 text-sm">
                    Total Items
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    {order.totalItems}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 p-6">
                  <p className="text-zinc-400 text-sm">
                    Total Amount
                  </p>

                  <p className="text-3xl font-bold text-[#4fea47] mt-2">
                    ${order.totalPrice.toFixed(2)}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 p-6">
                  <p className="text-zinc-400 text-sm">
                    Order Date
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {order.date}
                  </p>
                </div>
              </div>

              <Link
                href={`/lab/auth-data/orders/${order.id}`}
                className="
                  mt-6
                  w-full
                  block
                  text-center
                  rounded-xl
                  border
                  border-[#4fea47]/20
                  py-3
                  text-[#4fea47]
                  font-semibold
                  hover:bg-[#4fea47]/10
                  transition-all
                "
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}