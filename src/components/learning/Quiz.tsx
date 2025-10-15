import React, { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  // Mock quiz data
  const quizQuestions = [{
    question: "Which principle states that it's impossible to know both the position and momentum of a particle with perfect accuracy?",
    options: ['Pauli Exclusion Principle', 'Heisenberg Uncertainty Principle', "Schrödinger's Cat Paradox", "Einstein's Relativity"],
    correctAnswer: 1
  }, {
    question: 'What phenomenon describes the ability of quantum particles to exist in multiple states simultaneously?',
    options: ['Quantum entanglement', 'Wave-particle duality', 'Quantum superposition', 'Quantum tunneling'],
    correctAnswer: 2
  }, {
    question: 'The Schrödinger equation is used to calculate what?',
    options: ['The mass of subatomic particles', 'The wavelength of light', 'The probability of finding a particle in a specific location', 'The energy required for nuclear fusion'],
    correctAnswer: 2
  }, {
    question: 'What experiment demonstrated the wave-particle duality of light and matter?',
    options: ['Millikan oil drop experiment', 'Double-slit experiment', 'Michelson-Morley experiment', 'Stern-Gerlach experiment'],
    correctAnswer: 1
  }, {
    question: 'When two quantum particles become entangled, what happens?',
    options: ['They annihilate each other', 'They cannot be separated by distance', 'Their properties become correlated regardless of distance', 'They lose their wave-like properties'],
    correctAnswer: 2
  }];
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };
  return <div className="flex flex-col h-full">
      {!quizCompleted ? <>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-300">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </div>
              <div className="text-sm text-gray-300">Score: {score}</div>
            </div>
            <div className="h-1.5 bg-[#272727] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF0000]" style={{
            width: `${(currentQuestionIndex + 1) / quizQuestions.length * 100}%`
          }}></div>
            </div>
          </div>
          <div className="bg-[#212121] rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium mb-4">
              {currentQuestion.question}
            </h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => <button key={index} onClick={() => handleAnswerSelect(index)} disabled={showResult} className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition ${selectedAnswer === index ? index === currentQuestion.correctAnswer ? 'bg-green-600 text-white' : 'bg-red-600 text-white' : showResult && index === currentQuestion.correctAnswer ? 'bg-green-600 text-white' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`}>
                  <span>{option}</span>
                  {showResult && index === currentQuestion.correctAnswer && <CheckIcon size={18} className="text-white" />}
                  {showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer && <XIcon size={18} className="text-white" />}
                </button>)}
            </div>
          </div>
        </> : <div className="bg-[#212121] rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium mb-2">Quiz Complete!</h3>
          <p className="text-gray-300 mb-4">
            You scored {score} out of {quizQuestions.length}
          </p>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-[#272727] flex items-center justify-center">
              <div className="text-3xl font-bold">
                {Math.round(score / quizQuestions.length * 100)}%
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button onClick={restartQuiz} className="w-full py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white font-medium rounded-lg">
              Try Again
            </button>
            <button className="w-full py-3 bg-[#272727] hover:bg-[#3D3D3D] text-white font-medium rounded-lg">
              Review Answers
            </button>
          </div>
        </div>}
    </div>;
};