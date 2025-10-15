import React from 'react';
import { BookOpenIcon } from 'lucide-react';
export const Summary: React.FC = () => {
  // Mock summary data
  const summary = {
    title: 'Introduction to Quantum Physics',
    keyPoints: ['Quantum physics deals with the behavior of matter and energy at the smallest scales.', 'Wave-particle duality is a central concept, showing that particles like electrons can behave as both particles and waves.', 'The double-slit experiment demonstrates wave-particle duality when electrons passing through slits create an interference pattern.', "Heisenberg's Uncertainty Principle states that we cannot simultaneously know both the position and momentum of a particle with perfect accuracy.", "Schrödinger's equation is the fundamental equation in quantum mechanics that describes how quantum states evolve over time.", 'Quantum superposition allows particles to exist in multiple states simultaneously until measured.', 'Quantum entanglement occurs when particles become correlated in such a way that the quantum state of each cannot be described independently.'],
    concepts: [{
      name: 'Wave-Particle Duality',
      description: 'The concept that every quantum entity exhibits both wave and particle properties.'
    }, {
      name: "Heisenberg's Uncertainty Principle",
      description: 'A fundamental limit to the precision with which complementary properties can be known.'
    }, {
      name: 'Quantum Superposition',
      description: 'The principle that quantum systems can exist in multiple states simultaneously.'
    }, {
      name: 'Quantum Entanglement',
      description: 'A phenomenon where entangled particles remain connected regardless of distance.'
    }]
  };
  return <div className="flex flex-col h-full">
      <div className="bg-[#212121] rounded-lg p-4 mb-4">
        <h3 className="text-lg font-medium mb-3">Video Summary</h3>
        <p className="text-sm text-gray-300 mb-4">
          This AI-generated summary highlights the key points and concepts
          covered in this video.
        </p>
        <h4 className="text-sm uppercase text-gray-400 mb-2">Key Points</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {summary.keyPoints.map((point, index) => <li key={index} className="text-sm">
              {point}
            </li>)}
        </ul>
        <h4 className="text-sm uppercase text-gray-400 mb-2">Main Concepts</h4>
        <div className="space-y-3">
          {summary.concepts.map((concept, index) => <div key={index} className="bg-[#272727] p-3 rounded-lg">
              <h5 className="font-medium mb-1">{concept.name}</h5>
              <p className="text-sm text-gray-300">{concept.description}</p>
            </div>)}
        </div>
      </div>
      <div className="mt-auto flex justify-center">
        <button className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg flex items-center">
          <BookOpenIcon size={16} className="mr-2" />
          Generate Flashcards from Summary
        </button>
      </div>
    </div>;
};