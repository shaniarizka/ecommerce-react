import { useState, useEffect } from "react";
import { getProducts, getCategories } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {

      const productsData = await getProducts();
      const categoriesData = await getCategories();

      setProducts(productsData);
      setCategories(categoriesData);

      setLoading(false);
    }

    fetchData();

  }, []);

  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "all" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) return <Loading />;

  return (

    <div style={{ padding: "2rem" }}>

      <h2>Katalog Produk</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div style={{ marginBottom: "20px" }}>

        <button onClick={() => setSelectedCategory("all")}>
          Semua
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}