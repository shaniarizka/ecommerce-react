export default function SearchBar({ searchTerm, setSearchTerm }) {

  return (

    <input
      type="text"
      placeholder="Cari produk..."
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      style={{
        padding:"0.5rem",
        width:"250px",
        borderRadius:"5px",
        border:"1px solid #ccc",
        marginBottom:"1rem"
      }}
    />

  );

}