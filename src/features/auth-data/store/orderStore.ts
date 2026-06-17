import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Order {
  id: string;
  totalItems: number;
  totalPrice: number;
  paymentMethod: string;
  date: string;
}

interface OrderState {
  orders: Order[];

  addOrder: (order: Order) => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [...state.orders, order],
        })),
    }),
    {
      name: "order-storage",
    }
  )
);