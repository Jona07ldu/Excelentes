import Link from 'next/link';

export default function OffersBanner() {
  return (
    <section className="mb-8 p-6 bg-accent rounded-lg text-white text-center">
      <h2 className="text-2xl font-bold">¡Ofertas Especiales!</h2>
      <p className="mt-2">Hasta 50% de descuento en productos seleccionados.</p>
      <Link href="/offers">
        <a className="inline-block mt-4 px-6 py-2 bg-white text-accent font-semibold rounded">Ver Ofertas</a>
      </Link>
    </section>
  );
}
