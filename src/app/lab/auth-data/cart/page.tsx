"use client";

import { useCartStore } from "@/features/auth-data/store/cartStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h1 className="text-5xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-zinc-400">
            Cart is Empty
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="
                  flex
                  items-center
                  gap-6
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  p-5
                "
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="
                    h-28
                    w-28
                    rounded-xl
                    object-cover
                  "
                />

                <div className="flex-1 flex flex-col">
                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {item.category}
                  </p>

                  <p className="text-[#4fea47] text-2xl font-bold mt-3">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="
                        h-10
                        w-10
                        rounded-lg
                        bg-zinc-700
                        text-xl
                        font-bold
                      "
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="
                        h-10
                        w-10
                        rounded-lg
                        bg-[#4fea47]
                        text-black
                        text-xl
                        font-bold
                      "
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="
                      mt-4
                      ml-auto
                      px-4
                      py-2
                      rounded-lg
                      bg-red-500
                      text-white
                      font-semibold
                      hover:bg-red-600
                      transition-all
                    "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
          h-fit
        "
      >
        <h2 className="text-3xl font-bold">
          Order Summary
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <button
  onClick={() =>
    router.push("/lab/auth-data/checkout")
  }
  className="
    mt-8
    w-full
    rounded-xl
    bg-[#4fea47]
    py-4
    text-black
    font-bold
    hover:scale-105
    transition-all
  "
>
  Proceed To Checkout
</button>
      </div>
    </div>
  );
}