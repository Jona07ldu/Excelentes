import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method!=='POST') return res.status(405).end();
  const { items } = req.body;
  const line_items = items.map((i:any)=>({
    price_data:{
      currency:'usd',
      product_data:{ name: i.name },
      unit_amount: i.price * 100
    },
    quantity: i.quantity
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    line_items,
    mode:'payment',
    success_url:`${req.headers.origin}/success`,
    cancel_url:`${req.headers.origin}/cart`
  });
  res.status(200).json({ id: session.id });
}
