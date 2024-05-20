import { createContext, useState } from "react";
import all_product, { Products } from "../../assets/all_product";

function getDefaultCart() {
  const cart: number[] = [];
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export type ProdArray = {
  all_product: Products[];
  cartItems: number[];
  addToCart(id: number): void;
  removeFromCart(id: number): void;
  getTotalCartAmount(): number;
  getTotalCartItems(): number;
};

export const ShopContext = createContext<ProdArray | null>(null);

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) totalAmount += cartItems[item] * itemInfo.new_price;
        else totalAmount += 0;
      }
    }
    return totalAmount;
  };

  function getTotalCartItems(): number {
    let totalItem: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
