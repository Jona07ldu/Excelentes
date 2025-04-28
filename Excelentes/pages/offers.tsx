import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function OffersPage() {
  const offers = products.filter(p => p.onOffer);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ofertas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {offers.map(o=> <ProductCard key={o.id} product={o} />)}
      </div>
    </div>
  );
}
