import Products from "./product";

export default async function HomePage() {
  // Llamada asíncrona a la API de productos en el servidor
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json(); // Convertir la respuesta en JSON

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a la Tienda</h1>
        <Products />
    </main>
  );
}
