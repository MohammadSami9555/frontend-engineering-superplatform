"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/features/auth-data/services/productService";
import { useCartStore } from "@/features/auth-data/store/cartStore";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  discountPercentage: number;
  description: string;
}

export default function ProductCatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
const addToCart = useCartStore(
  (state) => state.addToCart
);
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });


  const filteredProducts =
    products?.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    ) || [];

  if (isLoading) {
    return (
      <h1 className="text-4xl font-bold">
        Loading Products...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-4xl">
        Error Loading Products
      </h1>
    );
  }

  return (
    <>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold">
            Product Catalog
          </h1>

          <p className="text-zinc-400 mt-2">
            Amazon Style Product Showcase
          </p>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            max-w-xl
            rounded-xl
            border border-white/10
            bg-white/5
            px-4
            py-3
            outline-none
            transition-all
            duration-300
            focus:border-[#4fea47]
          "
        />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">
              Total Products
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              {products?.length}
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">
              Search Results
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              {filteredProducts.length}
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">
              API Status
            </p>

            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              Active
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const originalPrice =
              product.price +
              (product.price *
                product.discountPercentage) /
                100;

            return (
              <div
                key={product.id}
                onClick={() =>
                  setSelectedProduct(product)
                }
                className="
                  cursor-pointer
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#4fea47]/50
                  hover:shadow-[0_0_25px_rgba(79,234,71,0.20)]
                "
              >
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="
                      h-52
                      w-full
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      bg-[#4fea47]
                      text-black
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-bold
                    "
                  >
                    -
                    {Math.round(
                      product.discountPercentage
                    )}
                    %
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="font-bold text-lg line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-sm text-zinc-400 mt-2">
                    {product.category}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span>⭐</span>
                    <span>
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#4fea47]">
                      ${product.price}
                    </span>

                    <span className="line-through text-zinc-500">
                      $
                      {originalPrice.toFixed(
                        0
                      )}
                    </span>
                  </div>

                  <button
                   onClick={(e) => {
  e.stopPropagation();

 addToCart({
  id: product.id,
  title: product.title,
  price: product.price,
  thumbnail: product.thumbnail,
  category: product.category,
});

  alert(`${product.title} added to cart`);
}}
                    className="
                      mt-5
                      w-full
                      rounded-xl
                      bg-[#4fea47]
                      py-3
                      text-black
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
            p-6
          "
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-w-4xl
              w-full
              rounded-3xl
              border border-white/10
              bg-[#0c1225]
              overflow-hidden
            "
          >
            <div className="grid md:grid-cols-2">
              <div className="bg-white p-8">
                <img
                  src={
                    selectedProduct.thumbnail
                  }
                  alt={
                    selectedProduct.title
                  }
                  className="
                    w-full
                    h-96
                    object-contain
                  "
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold">
                  {selectedProduct.title}
                </h2>

                <p className="text-zinc-400 mt-4">
                  {
                    selectedProduct.description
                  }
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-yellow-400">
                    ⭐
                  </span>

                  <span>
                    {
                      selectedProduct.rating
                    }
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-[#4fea47]">
                    $
                    {
                      selectedProduct.price
                    }
                  </span>
                </div>

                <button
 onClick={(e) => {
  e.stopPropagation();

addToCart({
  id: selectedProduct.id,
  title: selectedProduct.title,
  price: selectedProduct.price,
  thumbnail: selectedProduct.thumbnail,
  category: selectedProduct.category,
});

  alert(
    `${selectedProduct.title} added to cart`
  );
}}
  className="
    mt-5
    w-full
    rounded-xl
    bg-[#4fea47]
    py-3
    text-black
    font-semibold
    transition-all
    duration-300
    hover:scale-105
  "
>
  Add To Cart
</button>

                <button
                  onClick={() =>
                    setSelectedProduct(null)
                  }
                  className="
                    mt-4
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    py-4
                  "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}