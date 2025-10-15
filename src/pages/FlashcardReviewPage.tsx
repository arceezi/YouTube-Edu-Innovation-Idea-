import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon, SearchIcon, FilterIcon } from 'lucide-react';
export const FlashcardReviewPage: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  // Mock flashcard sets
  const flashcardSets = [{
    id: 'set1',
    title: 'Introduction to Quantum Physics',
    channel: 'MIT OpenCourseWare',
    thumbnail: 'https://i.ytimg.com/vi/2h1E3YJMKfA/maxresdefault.jpg',
    cardCount: 12,
    lastReviewed: '2 days ago',
    cards: [{
      question: 'What is wave-particle duality?',
      answer: 'The concept that every particle or quantum entity exhibits both wave and particle properties.'
    }, {
      question: "What is Heisenberg's Uncertainty Principle?",
      answer: 'A fundamental principle in quantum mechanics that states that the more precisely the position of a particle is determined, the less precisely its momentum can be predicted.'
    }, {
      question: "What is Schrödinger's equation?",
      answer: 'A linear partial differential equation that describes how the quantum state of a physical system changes over time.'
    }]
  }, {
    id: 'set2',
    title: 'JavaScript Fundamentals',
    channel: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    cardCount: 15,
    lastReviewed: '1 week ago',
    cards: [{
      question: 'What is a JavaScript variable?',
      answer: 'A container for storing data values.'
    }, {
      question: 'What is the difference between let and const?',
      answer: 'let allows reassignment, while const creates a read-only reference.'
    }, {
      question: 'What is a callback function?',
      answer: 'A function passed as an argument to another function, to be executed later.'
    }]
  }, {
    id: 'set3',
    title: 'World War II Overview',
    channel: 'Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/Objwz0xgZqc/maxresdefault.jpg',
    cardCount: 20,
    lastReviewed: '3 days ago',
    cards: [{
      question: 'When did World War II begin?',
      answer: 'September 1, 1939, when Nazi Germany invaded Poland.'
    }, {
      question: 'What was the Holocaust?',
      answer: 'The genocide of European Jews and other groups by Nazi Germany during World War II.'
    }, {
      question: 'When did World War II end?',
      answer: 'In Europe on May 8, 1945 (V-E Day) and in Asia on September 2, 1945 (V-J Day).'
    }]
  }, {
    id: 'set4',
    title: 'Calculus Basics',
    channel: 'Khan Academy',
    thumbnail: 'https://i.ytimg.com/vi/HfACrKJ_Y2w/maxresdefault.jpg',
    cardCount: 18,
    lastReviewed: 'Never',
    cards: [{
      question: 'What is a derivative?',
      answer: 'A measure of how a function changes as its input changes.'
    }, {
      question: 'What is an integral?',
      answer: 'The area under a curve, or more generally, the accumulation of quantities.'
    }, {
      question: 'What is the Fundamental Theorem of Calculus?',
      answer: 'It establishes the connection between differentiation and integration.'
    }]
  }];
  const currentSet = flashcardSets.find(set => set.id === selectedSet);
  const currentCard = currentSet?.cards[currentCardIndex];
  const handleNext = () => {
    if (currentSet && currentCardIndex < currentSet.cards.length - 1) {
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
  const handleSelectSet = (setId: string) => {
    setSelectedSet(setId);
    setCurrentCardIndex(0);
    setFlipped(false);
  };
  const handleBackToSets = () => {
    setSelectedSet(null);
  };
  return <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Flashcards</h1>
        {!selectedSet ? <>
            {/* Search and filter */}
            <div className="flex mb-6">
              <div className="relative flex-1 mr-4">
                <input type="text" placeholder="Search flashcards" className="w-full h-10 px-10 py-2 bg-[#121212] border border-[#303030] rounded-full focus:outline-none focus:border-[#1c62b9]" />
                <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="flex items-center px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3D3D3D]">
                <FilterIcon size={18} className="mr-2" />
                <span>Filter</span>
              </button>
            </div>
            {/* Flashcard sets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {flashcardSets.map(set => <div key={set.id} className="bg-[#181818] rounded-lg overflow-hidden cursor-pointer hover:bg-[#272727] transition" onClick={() => handleSelectSet(set.id)}>
                  <div className="relative">
                    <img src={set.thumbnail} alt={set.title} className="w-full object-cover h-36" />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                      {set.cardCount} cards
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1 line-clamp-2">
                      {set.title}
                    </h3>
                    <p className="text-sm text-gray-400">{set.channel}</p>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Last reviewed: {set.lastReviewed}</span>
                      <span>Mastery: 65%</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </> : <>
            {/* Flashcard review interface */}
            <button onClick={handleBackToSets} className="flex items-center mb-4 text-gray-400 hover:text-white">
              <ArrowLeftIcon size={18} className="mr-2" />
              <span>Back to all sets</span>
            </button>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <div className="lg:w-1/4 mb-6 lg:mb-0">
                <div className="bg-[#181818] rounded-lg overflow-hidden">
                  <img src={currentSet?.thumbnail} alt={currentSet?.title} className="w-full object-cover h-40" />
                  <div className="p-4">
                    <h2 className="text-xl font-medium mb-1">
                      {currentSet?.title}
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                      {currentSet?.channel}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Total cards:</span>
                        <span>{currentSet?.cardCount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Mastered:</span>
                        <span>8 cards (65%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>To review:</span>
                        <span>4 cards</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg">
                        Study All Cards
                      </button>
                      <button className="w-full py-2 bg-[#272727] hover:bg-[#3D3D3D] text-white rounded-lg">
                        Review Difficult Cards
                      </button>
                      <button className="w-full py-2 bg-[#272727] hover:bg-[#3D3D3D] text-white rounded-lg">
                        Export Cards
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4">
                <div className="bg-[#181818] rounded-lg p-6">
                  <div className="text-sm text-gray-300 mb-4">
                    Click on the card to flip it and reveal the answer.
                  </div>
                  <div className="h-64 bg-[#212121] rounded-lg p-6 mb-4 cursor-pointer perspective-1000 transition-transform duration-300 relative" onClick={handleFlip} style={{
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}>
                    <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center" style={{
                  backfaceVisibility: 'hidden'
                }}>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Question:
                        </div>
                        <div className="text-xl font-medium">
                          {currentCard?.question}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center" style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Answer:
                        </div>
                        <div className="text-xl">{currentCard?.answer}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      Card {currentCardIndex + 1} of {currentSet?.cards.length}
                    </div>
                    <div className="flex space-x-3">
                      <button onClick={handlePrevious} disabled={currentCardIndex === 0} className={`p-2 rounded-full ${currentCardIndex === 0 ? 'text-gray-500 bg-[#272727]' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`}>
                        <ArrowLeftIcon size={18} />
                      </button>
                      <button onClick={handleFlip} className="p-2 rounded-full bg-[#272727] hover:bg-[#3D3D3D]">
                        <RotateCwIcon size={18} />
                      </button>
                      <button onClick={handleNext} disabled={currentSet && currentCardIndex === currentSet.cards.length - 1} className={`p-2 rounded-full ${currentSet && currentCardIndex === currentSet.cards.length - 1 ? 'text-gray-500 bg-[#272727]' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`}>
                        <ArrowRightIcon size={18} />
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-[#272727] hover:bg-[#3D3D3D] text-white rounded-lg text-sm">
                        Hard
                      </button>
                      <button className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg text-sm">
                        Easy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>}
      </div>
    </div>;
};