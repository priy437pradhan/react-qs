// src/components/SearchBar.jsx

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search questions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
    />
  );
}