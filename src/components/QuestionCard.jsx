import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function QuestionCard({ question, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-3 mb-3 border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl">
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-1 rounded bg-blue-200 text-blue-900">
              {question.category}
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded bg-gray-200 text-gray-800">
              {question.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {index + 1}. {question.question}
          </h3>
        </div>
        <button className="ml-4 text-blue-500 hover:text-blue-700 focus:outline-none">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 text-gray-800">
          <p className="text-sm leading-relaxed">
            {question.answer}
          </p>
        </div>
      )}
    </div>
  );
}
