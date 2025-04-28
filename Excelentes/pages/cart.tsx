import { useCart } from '../components/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((s,i)=>s+i.price*i.quantity,0));
  }, [cart]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/checkout', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ items: cart })
    });
    const { id } = await res.json();
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      {cart.length===0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item=>(
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price*item.quantity}</span>
                <button onClick={()=>removeFromCart(item.id)} className="text-red-500">X</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${total}</div>
          <div className="flex space-x-2 mt-4">
            <button onClick={clearCart} className="px-4 py-2 bg-gray-300 rounded">Vaciar</button>
            <button onClick={handleCheckout} className="px-4 py-2 bg-accent text-white rounded">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}
