"use client";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import { useCartStore } from "@/features/auth-data/store/cartStore";

export default function TopNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const cart = useCartStore(
    (state) => state.cart
  );

  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">
        Frontend Engineering SuperPlatform
      </h1>

      <div className="flex items-center gap-6">
        <div className="text-sm text-zinc-400">
          Engineering Lab Workspace
        </div>

        {(pathname.includes("/product-catalog") ||
          pathname.includes("/cart") ||
          pathname.includes("/checkout")) && (
          <div
            onClick={() =>
              router.push("/lab/auth-data/cart")
            }
            className="
              cursor-pointer
              px-4
              py-2
              rounded-xl
              bg-[#4fea47]
              text-black
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Cart ({cart.length})
          </div>
        )}
      </div>
    </header>
  );
}