"use client";

import { useParams } from "next/navigation";
import { useOrderStore } from "@/features/auth-data/store/orderStore";

export default function OrderDetailsPage() {
  const params = useParams();

  const orders = useOrderStore(
    (state) => state.orders
  );

  const order = orders.find(
    (o) => o.id === params.id
  );

  if (!order) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Order Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          Order Details
        </h1>

        <p className="text-zinc-400 mt-2">
          Complete order information
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-bold">
              🛒 Order #{order.id.slice(0, 8)}
            </h2>

            <p className="text-zinc-400 mt-3">
              {order.date}
            </p>
          </div>

          <span
            className="
              px-4
              py-2
              rounded-full
              bg-[#4fea47]/10
              border
              border-[#4fea47]/20
              text-[#4fea47]
              font-semibold
            "
          >
            Delivered
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-2xl bg-black/20 p-6">
            <p className="text-zinc-400">
              Total Items
            </p>

            <p className="text-4xl font-bold mt-2">
              {order.totalItems}
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 p-6">
            <p className="text-zinc-400">
              Total Amount
            </p>

            <p className="text-4xl font-bold text-[#4fea47] mt-2">
              ${order.totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 p-6">
            <p className="text-zinc-400">
              Payment Method
            </p>

            <p className="text-4xl font-bold mt-2 uppercase">
              {order.paymentMethod}
            </p>
          </div>
        </div>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <h2 className="text-3xl font-bold mb-6">
          Delivery Timeline
        </h2>

        <div className="space-y-4">
          <div className="text-[#4fea47]">
            ✅ Order Placed
          </div>

          <div className="text-[#4fea47]">
            ✅ Payment Received
          </div>

          <div className="text-[#4fea47]">
            ✅ Shipped
          </div>

          <div className="text-[#4fea47]">
            ✅ Delivered
          </div>
        </div>
      </div>
    </div>
  );
}