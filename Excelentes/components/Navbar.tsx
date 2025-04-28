import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/"><a className="text-xl font-bold text-primary">Excelentes</a></Link>
        <ul className="flex space-x-6">
          <li><Link href="/shop/lentes-graduados"><a>Lentes graduadas</a></Link></li>
          <li><Link href="/shop/gafas-de-sol"><a>Gafas de sol</a></Link></li>
          <li><Link href="/shop/lentes-de-contacto"><a>Lentes de contacto</a></Link></li>
          <li><Link href="/offers"><a className="text-accent font-semibold">Ofertas</a></Link></li>
          <li><Link href="/ar-tryon"><a>Prueba Virtual</a></Link></li>
        </ul>
        <Link href="/cart"><a><ShoppingCart size={24} /></a></Link>
      </div>
    </nav>
  );
}
