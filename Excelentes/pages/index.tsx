import OffersBanner from '../components/OffersBanner';

export default function Home() {
  return (
    <>
      <section className="mb-8">
        <img src="/images/banner-principal.jpg" alt="Banner �ptica Excelentes" className="w-full rounded-lg shadow" />
      </section>
      <OffersBanner />
      <section>
        <h2 className="text-2xl font-bold mb-4">Categor�as Destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Aqu� podr�as colocar enlaces manuales o tarjetas */}
        </div>
      </section>
    </>
  );
}
