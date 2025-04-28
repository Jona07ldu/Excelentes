export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Óptica Excelentes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
