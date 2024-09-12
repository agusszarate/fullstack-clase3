// Importar 'useState' y 'useEffect' no es necesario en componentes del lado del servidor.

export default async function Products() {
    // Llamada asíncrona a la API de productos en el servidor
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json(); // Convertir la respuesta en JSON
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  