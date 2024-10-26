import { categories, difficulties } from '../data/questions';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
        className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option value="">All Difficulties</option>
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>{difficulty}</option>
        ))}
      </select>
    </div>
  );
}

