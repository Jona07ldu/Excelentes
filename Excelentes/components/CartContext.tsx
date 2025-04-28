import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type CartItem = { id:number; name:string; price:number; quantity:number };
type Context = {
  cart: CartItem[];
  addToCart: (p: Omit<CartItem,'quantity'>) => void;
  removeFromCart: (id:number) => void;
  clearCart: () => void;
};

const CartContext = createContext<Context|undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p: Omit<CartItem,'quantity'>) => {
    setCart(prev => {
      const exists = prev.find(i=>i.id===p.id);
      if (exists) return prev.map(i=>i.id===p.id?{...i,quantity:i.quantity+1}:i);
      return [...prev,{...p,quantity:1}];
    });
  };
  const removeFromCart = (id:number) => setCart(prev=>prev.filter(i=>i.id!==id));
  const clearCart = () => setCart([]);

  return <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart}}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
