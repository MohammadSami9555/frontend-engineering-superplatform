"use client";

import { useState } from "react";
import { useCartStore } from "@/features/auth-data/store/cartStore";
import { useOrderStore } from "@/features/auth-data/store/orderStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const addOrder = useOrderStore((state) => state.addOrder);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const [orderPlaced, setOrderPlaced] =
    useState(false);
    const placeOrder = () => {
  addOrder({
    id: crypto.randomUUID().toString(),
    totalItems,
    totalPrice,
    paymentMethod,
    date: new Date().toLocaleDateString(),
  });

  setOrderPlaced(true);
};

  if (orderPlaced) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div
          className="
            max-w-4xl
            w-full
            text-center
            rounded-3xl
            border
            border-[#4fea47]/30
            bg-white/5
            backdrop-blur-xl
            p-12
            shadow-[0_0_50px_rgba(79,234,71,0.15)]
          "
        >
          <div className="text-8xl mb-6">
            🎉
          </div>

          <h1 className="text-6xl font-bold text-[#4fea47]">
            Order Confirmed
          </h1>

          <p className="text-zinc-400 text-xl mt-6">
            Your order has been placed successfully.
          </p>

          <p className="text-zinc-500 mt-2">
            Estimated Delivery: 3-5 Business Days
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-zinc-400 text-sm">
                Order ID
              </p>
              <p className="font-bold">
                #FESP2026
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-zinc-400 text-sm">
                Total Items
              </p>
              <p className="font-bold">
                {totalItems}
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-zinc-400 text-sm">
                Amount Paid
              </p>
              <p className="font-bold text-[#4fea47]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              (window.location.href =
                "/lab/auth-data/product-catalog")
            }
            className="
              mt-10
              px-8
              py-4
              rounded-2xl
              bg-[#4fea47]
              text-black
              font-bold
              hover:scale-105
              transition-all
            "
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-5xl font-bold mb-8">
          Checkout
        </h1>

        <h2 className="text-2xl font-bold mb-6">
          Customer Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />
        </div>

        <textarea
          placeholder="Delivery Address"
          rows={4}
          className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
            mt-4
          "
        />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="State"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
          />
        </div>

        {/* Payment */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">
            Payment Method
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === "upi"}
                onChange={() =>
                  setPaymentMethod("upi")
                }
              />
              <span>UPI</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() =>
                  setPaymentMethod("card")
                }
              />
              <span>Credit / Debit Card</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() =>
                  setPaymentMethod("cod")
                }
              />
              <span>Cash On Delivery</span>
            </label>
          </div>

          {paymentMethod === "upi" && (
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                "
              />

              <button
                onClick={placeOrder}
                className="
                  w-full
                  rounded-xl
                  bg-[#4fea47]
                  py-3
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                Pay Now 💳
              </button>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Card Number"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                "
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="
                    p-4
                    rounded-xl
                    bg-black/20
                    border
                    border-white/10
                  "
                />

                <input
                  type="text"
                  placeholder="CVV"
                  className="
                    p-4
                    rounded-xl
                    bg-black/20
                    border
                    border-white/10
                  "
                />
              </div>

              <button
                onClick={placeOrder}
                className="
                  w-full
                  rounded-xl
                  bg-[#4fea47]
                  py-3
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                Pay Now 💳
              </button>
            </div>
          )}

          {paymentMethod === "cod" && (
            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                Cash On Delivery Available 🚚
              </div>

              <button
               onClick={placeOrder}
                className="
                  w-full
                  rounded-xl
                  bg-[#4fea47]
                  py-3
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                Confirm Order 🚀
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          h-fit
          sticky
          top-6
        "
      >
        <h2 className="text-3xl font-bold">
          Order Summary
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total Price</span>
            <span>
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-zinc-400 text-sm">
              Payment Method
            </p>

            <p className="font-semibold mt-2 uppercase">
              {paymentMethod}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}