import  { useState, useMemo } from 'react';
import { questions } from '../src/data/questions';
import SearchBar from '../src/components/SearchBar';
import CategoryFilter from '../src/components/CategoryFilter';
import QuestionCard from '../src/components/QuestionCard';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredQuestions = useMemo(() => {
    return questions.filter(question => {
      const matchesSearch = question.question.toLowerCase().includes(search.toLowerCase()) ||
                          question.answer.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || question.category === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || question.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [search, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="mt-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuestions.map((question, index) => (
          <QuestionCard 
            key={question.id} 
            question={question} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
