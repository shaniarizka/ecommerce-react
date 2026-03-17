import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {

  const { totalItems } = useCart();

  return (

    <header
      style={{
        background: "#1B4F72",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >

      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>Shania Store</h2>
      </Link>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({totalItems})
        </Link>
      </nav>

    </header>
  );
}