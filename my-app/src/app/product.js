// Importar 'useState' y 'useEffect' no es necesario en componentes del lado del servidor.

export default async function Products() {
    // Llamada asíncrona a la API de productos en el servidor
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json(); // Convertir la respuesta en JSON
  
    return (
      <div>
       <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lista de Productos</h2>
        <ul className="space-y-4">
          {products.map(product => (
            <li key={product.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <strong className="text-lg font-bold text-green-500">${product.price}</strong>
            </li>
          ))}
        </ul>
      </section>
      </div>
    );
  }
  