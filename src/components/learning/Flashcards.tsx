import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon } from 'lucide-react';
export const Flashcards: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  // Mock flashcard data
  const flashcards = [{
    question: 'What is wave-particle duality?',
    answer: 'The concept that every particle or quantum entity exhibits both wave and particle properties. It is a central concept of quantum mechanics.'
  }, {
    question: "What is Heisenberg's Uncertainty Principle?",
    answer: 'A fundamental principle in quantum mechanics that states that the more precisely the position of a particle is determined, the less precisely its momentum can be predicted, and vice versa.'
  }, {
    question: "What is Schrödinger's equation?",
    answer: 'A linear partial differential equation that describes how the quantum state of a physical system changes over time. It is central to quantum mechanics.'
  }, {
    question: 'What is quantum superposition?',
    answer: 'The principle that quantum systems can exist in multiple states simultaneously until measured or observed.'
  }, {
    question: 'What is quantum entanglement?',
    answer: 'A physical phenomenon that occurs when a pair or group of particles interact in such a way that the quantum state of each particle cannot be described independently of the state of the others.'
  }];
  const currentCard = flashcards[currentCardIndex];
  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false);
    }
  };
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false);
    }
  };
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return <div className="flex flex-col h-full">
      <div className="text-sm text-gray-300 mb-4">
        Click on the card to flip it and reveal the answer.
      </div>
      <div className="flex-1 bg-[#212121] rounded-lg p-6 mb-4 cursor-pointer perspective-1000 transition-transform duration-300 relative" onClick={handleFlip} style={{
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      transformStyle: 'preserve-3d'
    }}>
        <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center" style={{
        backfaceVisibility: 'hidden'
      }}>
          <div>
            <div className="text-sm text-gray-400 mb-2">Question:</div>
            <div className="text-lg font-medium">{currentCard.question}</div>
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center" style={{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)'
      }}>
          <div>
            <div className="text-sm text-gray-400 mb-2">Answer:</div>
            <div className="text-lg">{currentCard.answer}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          Card {currentCardIndex + 1} of {flashcards.length}
        </div>
        <div className="flex space-x-2">
          <button onClick={handlePrevious} disabled={currentCardIndex === 0} className={`p-2 rounded-full ${currentCardIndex === 0 ? 'text-gray-500 bg-[#272727]' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`}>
            <ArrowLeftIcon size={16} />
          </button>
          <button onClick={handleFlip} className="p-2 rounded-full bg-[#272727] hover:bg-[#3D3D3D]">
            <RotateCwIcon size={16} />
          </button>
          <button onClick={handleNext} disabled={currentCardIndex === flashcards.length - 1} className={`p-2 rounded-full ${currentCardIndex === flashcards.length - 1 ? 'text-gray-500 bg-[#272727]' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`}>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </div>;
};