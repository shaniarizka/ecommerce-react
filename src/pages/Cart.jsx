import { useCart } from "../context/CartContext";

export default function Cart() {

  const {
    items,
    totalPrice,
    removeItem,
    increaseItem,
    decreaseItem,
  } = useCart();

  if (items.length === 0) {

    return (
      <div style={{ padding: "2rem" }}>
        <h2>Keranjang Kosong</h2>
      </div>
    );
  }

  return (

    <div style={{ padding: "2rem" }}>

      <h2>Keranjang Belanja</h2>

      {items.map((item) => (

        <div key={item.id} style={{ marginBottom: "20px" }}>
          <img src={item.image} width="80" />

          <h4>{item.title}</h4>

          <p>
            ${item.price} x {item.quantity}
          </p>

          <button onClick={() => decreaseItem(item.id)}>
            -
          </button>

          <button onClick={() => increaseItem(item.id)}>
            +
          </button>

          <button onClick={() => removeItem(item.id)}>
            Hapus
          </button>

        </div>

      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

    </div>
  );
}