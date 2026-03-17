import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";

export default function ProductDetail() {

  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchProduct() {

      const data = await getProductById(id);
      setProduct(data);

      setLoading(false);
    }

    fetchProduct();

  }, [id]);

  if (loading) return <Loading />;

  return (

    <div style={{ padding: "2rem" }}>

      <h2>{product.title}</h2>

      <img
        src={product.image}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button onClick={() => addItem(product)}>
        + Tambah ke Keranjang
      </button>

    </div>

  );
}