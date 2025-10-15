import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUpIcon, ThumbsDownIcon, ShareIcon, DownloadIcon, BookOpenIcon, BrainIcon, PencilIcon, FileTextIcon } from 'lucide-react';
import { Flashcards } from '../components/learning/Flashcards';
import { Quiz } from '../components/learning/Quiz';
import { Notes } from '../components/learning/Notes';
import { Summary } from '../components/learning/Summary';
export const WatchPage: React.FC = () => {
  const {
    videoId
  } = useParams<{
    videoId: string;
  }>();
  const [learnModeActive, setLearnModeActive] = useState(false);
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'notes' | 'summary'>('flashcards');
  // Mock video data
  const video = {
    id: videoId || 'vid1',
    title: 'Introduction to Quantum Physics',
    channel: 'MIT OpenCourseWare',
    subscribers: '4.2M subscribers',
    views: '1.2M views',
    date: 'Apr 15, 2023',
    likes: '45K',
    description: "This lecture introduces the basic concepts of quantum physics, including wave-particle duality, Schrödinger's equation, and quantum superposition. Professor Johnson explains how quantum mechanics revolutionized our understanding of the microscopic world and its implications for modern technology.",
    transcript: [{
      time: '0:00',
      text: 'Welcome to our lecture on quantum physics fundamentals.'
    }, {
      time: '1:25',
      text: "Let's begin with the concept of wave-particle duality."
    }, {
      time: '5:42',
      text: 'The double-slit experiment demonstrates this principle clearly.'
    }, {
      time: '10:15',
      text: "Next, we'll discuss the Heisenberg Uncertainty Principle."
    }, {
      time: '15:30',
      text: "This leads us to Schrödinger's equation, the fundamental equation in quantum mechanics."
    }, {
      time: '22:18',
      text: "Let's work through some examples of quantum systems."
    }, {
      time: '30:45',
      text: 'Quantum superposition allows particles to exist in multiple states simultaneously.'
    }, {
      time: '38:20',
      text: "Finally, we'll discuss quantum entanglement and its implications."
    }]
  };
  // Mock recommended videos
  const recommendedVideos = [{
    id: 'rec1',
    title: 'Quantum Entanglement Explained',
    channel: 'MIT OpenCourseWare',
    views: '856K views',
    timeAgo: '1 year ago',
    thumbnail: 'https://i.ytimg.com/vi/DxQK1WDYI_k/maxresdefault.jpg',
    duration: '28:45'
  }, {
    id: 'rec2',
    title: 'The Uncertainty Principle and Quantum Mechanics',
    channel: 'Khan Academy',
    views: '1.1M views',
    timeAgo: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/TQKELOE9eY4/maxresdefault.jpg',
    duration: '15:32'
  }, {
    id: 'rec3',
    title: 'Quantum Computing for Beginners',
    channel: 'Google Quantum AI',
    views: '2.3M views',
    timeAgo: '8 months ago',
    thumbnail: 'https://i.ytimg.com/vi/F_Riqjdh2oM/maxresdefault.jpg',
    duration: '42:19'
  }, {
    id: 'rec4',
    title: 'String Theory Explained',
    channel: 'PBS Space Time',
    views: '4.7M views',
    timeAgo: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/Da-2h2B4faU/maxresdefault.jpg',
    duration: '18:54'
  }];
  return <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-4">
        <div className={`flex flex-col lg:flex-row ${learnModeActive ? 'lg:space-x-4' : ''}`}>
          {/* Left column - Video and info */}
          <div className={`${learnModeActive ? 'lg:w-[60%]' : 'lg:w-[70%]'}`}>
            {/* Video player */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <img src="https://i.ytimg.com/vi/2h1E3YJMKfA/maxresdefault.jpg" alt="Video thumbnail" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
            </div>
            {/* Video info */}
            <div className="mt-3">
              <h1 className="text-xl font-bold">{video.title}</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{video.channel}</p>
                    <p className="text-gray-400 text-sm">{video.subscribers}</p>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-white text-black rounded-full text-sm font-medium">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center mt-3 md:mt-0">
                  <div className="flex bg-[#272727] rounded-full mr-2">
                    <button className="flex items-center px-4 py-2 rounded-l-full hover:bg-[#3D3D3D]">
                      <ThumbsUpIcon size={18} className="mr-2" />
                      <span>{video.likes}</span>
                    </button>
                    <div className="w-px bg-[#3D3D3D]"></div>
                    <button className="flex items-center px-4 py-2 rounded-r-full hover:bg-[#3D3D3D]">
                      <ThumbsDownIcon size={18} />
                    </button>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3D3D3D] mr-2">
                    <ShareIcon size={18} className="mr-2" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3D3D3D] mr-2">
                    <DownloadIcon size={18} className="mr-2" />
                    <span>Download</span>
                  </button>
                  <button className={`flex items-center px-4 py-2 rounded-full mr-2 ${learnModeActive ? 'bg-[#FF0000] text-white' : 'bg-[#272727] hover:bg-[#3D3D3D]'}`} onClick={() => setLearnModeActive(!learnModeActive)}>
                    <BrainIcon size={18} className="mr-2" />
                    <span>Learn Mode</span>
                  </button>
                  <button className="p-2 bg-[#272727] rounded-full hover:bg-[#3D3D3D]">
                    <div size={18} />
                  </button>
                </div>
              </div>
              {/* Video details */}
              <div className="mt-4 bg-[#272727] p-3 rounded-lg">
                <div className="flex text-sm text-gray-200">
                  <span className="mr-2">{video.views}</span>
                  <span className="mr-2">•</span>
                  <span>{video.date}</span>
                </div>
                <p className="mt-2 text-sm whitespace-pre-line">
                  {video.description}
                </p>
              </div>
              {/* Transcript section */}
              {learnModeActive && <div className="mt-4 bg-[#272727] p-3 rounded-lg">
                  <h3 className="font-medium mb-2">Transcript</h3>
                  <div className="max-h-64 overflow-y-auto">
                    {video.transcript.map((item, index) => <div key={index} className="flex py-1 hover:bg-[#3D3D3D] rounded px-2">
                        <span className="text-gray-400 w-12">{item.time}</span>
                        <span>{item.text}</span>
                      </div>)}
                  </div>
                </div>}
            </div>
          </div>
          {/* Right column */}
          {learnModeActive ?
        // Learn mode sidebar
        <div className="lg:w-[40%] mt-4 lg:mt-0">
              <div className="bg-[#181818] rounded-lg overflow-hidden">
                <div className="flex border-b border-[#272727]">
                  <button onClick={() => setActiveTab('flashcards')} className={`flex-1 py-3 text-center flex items-center justify-center ${activeTab === 'flashcards' ? 'border-b-2 border-[#FF0000]' : ''}`}>
                    <BookOpenIcon size={18} className="mr-2" />
                    <span>Flashcards</span>
                  </button>
                  <button onClick={() => setActiveTab('quiz')} className={`flex-1 py-3 text-center flex items-center justify-center ${activeTab === 'quiz' ? 'border-b-2 border-[#FF0000]' : ''}`}>
                    <BrainIcon size={18} className="mr-2" />
                    <span>Quiz</span>
                  </button>
                  <button onClick={() => setActiveTab('notes')} className={`flex-1 py-3 text-center flex items-center justify-center ${activeTab === 'notes' ? 'border-b-2 border-[#FF0000]' : ''}`}>
                    <PencilIcon size={18} className="mr-2" />
                    <span>Notes</span>
                  </button>
                  <button onClick={() => setActiveTab('summary')} className={`flex-1 py-3 text-center flex items-center justify-center ${activeTab === 'summary' ? 'border-b-2 border-[#FF0000]' : ''}`}>
                    <FileTextIcon size={18} className="mr-2" />
                    <span>Summary</span>
                  </button>
                </div>
                <div className="p-4">
                  {activeTab === 'flashcards' && <Flashcards />}
                  {activeTab === 'quiz' && <Quiz />}
                  {activeTab === 'notes' && <Notes />}
                  {activeTab === 'summary' && <Summary />}
                </div>
              </div>
            </div> :
        // Regular YouTube recommendations
        <div className="lg:w-[30%] mt-4 lg:mt-0">
              <div className="flex items-center mb-3">
                <h3 className="font-medium">Up next</h3>
              </div>
              {recommendedVideos.map(video => <div key={video.id} className="flex mb-2 hover:bg-[#272727] rounded-lg p-2">
                  <div className="relative flex-shrink-0 w-40 h-24">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="ml-2 flex-grow">
                    <h4 className="text-sm font-medium line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {video.channel}
                    </p>
                    <p className="text-xs text-gray-400">
                      {video.views} • {video.timeAgo}
                    </p>
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
    </div>;
};