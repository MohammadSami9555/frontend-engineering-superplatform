import Link from "next/link";

const labs = [
  {
    title: "JWT Authentication",
    description: "Authentication using JWT tokens and protected routes.",
    href: "/lab/auth-data/jwt-auth",
  },
  {
    title: "Product Catalog",
    description: "React Query powered product catalog.",
    href: "/lab/auth-data/product-catalog",
  },
  {
    title: "Admin Dashboard",
    description: "Role based admin management dashboard.",
    href: "/lab/auth-data/admin",
  },
  {
    title: "Users Management",
    description: "Manage and monitor users.",
    href: "/lab/auth-data/users",
  },
  {
    title: "Orders",
    description: "Order tracking and management system.",
    href: "/lab/auth-data/orders",
  },
  {
    title: "Cart",
    description: "Shopping cart implementation.",
    href: "/lab/auth-data/cart",
  },
  {
    title: "Checkout",
    description: "Complete checkout workflow.",
    href: "/lab/auth-data/checkout",
  },
  {
    title: "Dashboard",
    description: "Auth & Data analytics dashboard.",
    href: "/lab/auth-data/dashboard",
  },
];

export default function AuthDataPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          Auth & Data Lab
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          JWT Auth, Product Catalog, Admin Dashboard,
          User Management, Orders, Cart and Checkout.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {labs.map((lab) => (
          <Link
            key={lab.href}
            href={lab.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-[#4fea47]/50 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold mb-3">
              {lab.title}
            </h2>

            <p className="text-zinc-400">
              {lab.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}