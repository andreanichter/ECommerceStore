import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
  basket: Basket | null;
  setBasket: (basket: Basket | null) => void;
  removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export function useStoreContext() {
  const context = useContext(StoreContext);

  if (!context) {
    throw Error("Oops - we do not seem to be inside the provider");
  }

  return context;
}

export function StoreProvider({ children }: PropsWithChildren<unknown>) {
  const [basket, setBasket] = useState<Basket | null>(null);

  function removeItem(productId: number, quantity: number) {
    if (!basket) return;

    const updatedItems = basket.items.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity - quantity }
        : item
    );

    const filteredItems = updatedItems.filter((item) => item.quantity > 0);

    setBasket((prevBasket) => ({
      ...prevBasket!,
      items: filteredItems,
    }));
  }

  return (
    <StoreContext.Provider value={{ basket, setBasket, removeItem }}>
      {children}
    </StoreContext.Provider>
  );
}
