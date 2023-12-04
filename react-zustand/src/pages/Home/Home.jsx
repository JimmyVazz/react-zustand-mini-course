import { useEffect } from "react";
import "./Home.css";
import { productsStore } from "../../state/productStore";
export default function Home() {
  const products = productsStore((state) => state.products);
  const getProducts = productsStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1 className="title">Productos</h1>
      {products?.map((product, i) => (
        <section key={i} className="section-container">
          <div className="grid-list">
            <img className="img" src={product.image} alt="imagen" />
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
            <div className="buttons">
              <button>Detalles</button>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
