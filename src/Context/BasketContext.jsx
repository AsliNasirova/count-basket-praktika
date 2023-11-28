import { createContext, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState(null);
  return (
    <BasketContext.Provider value={[basket, setBasket]}>
      {children}
    </BasketContext.Provider>
  );
}
export default BasketProvider;
