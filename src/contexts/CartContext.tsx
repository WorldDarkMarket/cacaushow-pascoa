'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  priceLabel: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  add: (item: { id: number; name: string; image: string; priceLabel: string }) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePriceBRL(s: string) {
  return Number(s.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", "."));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem("cart.items");
      return raw ? JSON.parse(raw) : [];
    }
    return [];
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cart.items", JSON.stringify(items));
    }
  }, [items]);

  const add: CartContextType["add"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          image: item.image,
          priceLabel: item.priceLabel,
          price: parsePriceBRL(item.priceLabel),
          qty: 1,
        },
      ];
    });
    setOpen(true);
  };

  const remove: CartContextType["remove"] = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const setQty: CartContextType["setQty"] = (id, qty) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((acc, i) => acc + i.price * i.qty, 0), [items]);

  const value: CartContextType = {
    items,
    add,
    remove,
    setQty,
    clear,
    count,
    subtotal,
    open,
    setOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("CartContext missing");
  return ctx;
}
