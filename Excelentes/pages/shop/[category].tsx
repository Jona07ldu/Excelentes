import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function CategoryPage() {
  const { category } = useRouter().query as { category: string };
  const filtered = products.filter(p => p.category === category);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{category.replace(/-/g,' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
