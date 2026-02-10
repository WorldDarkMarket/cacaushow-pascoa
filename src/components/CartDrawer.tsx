'use client';

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { items, remove, setQty, subtotal, open, setOpen } = useCart();
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded" />
                <div className="flex-1">
                  <div className="font-serif-alt font-semibold">{item.name}</div>
                  <div className="text-muted-foreground text-sm">{item.priceLabel}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      -
                    </Button>
                    <span className="min-w-6 text-center">{item.qty}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      +
                    </Button>
                    <Button variant="ghost" onClick={() => remove(item.id)}>
                      Remover
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <SheetFooter className="flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-xl font-bold text-primary">
              {subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
          <Button
            className="w-full"
            disabled={items.length === 0}
            onClick={() => {
              setOpen(false);
              router.push("/checkout");
            }}
          >
            Ir para Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
