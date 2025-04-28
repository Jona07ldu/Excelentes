import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from 'shadcn/ui/card';
import { Button } from 'shadcn/ui/button';
import { Product } from '../data/products';
import { useCart } from './CartContext';

export default function ProductCard({ product }: { product:Product }) {
  const { addToCart } = useCart();
  return (
    <Card className="shadow-lg">
      <CardContent>
        <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-t-lg object-cover" />
        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-accent font-bold">${product.price}</p>
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Link href={`/shop/${product.category}`}><a><Button>Ver</Button></a></Link>
        <Button onClick={() => addToCart(product)}>Agregar</Button>
      </CardFooter>
    </Card>
  );
}
