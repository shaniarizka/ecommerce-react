import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addItem } = useCart();

  return (

    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />

      <h3>{product.title.substring(0, 50)}...</h3>

      <p style={{ fontWeight: "bold", color: "#E67E22" }}>
        ${product.price}
      </p>

      <div style={{ display: "flex", gap: "10px" }}>

        <Link to={`/product/${product.id}`}>
          Detail
        </Link>

        <button onClick={() => addItem(product)}>
          + Keranjang
        </button>

      </div>

    </div>
  );
}