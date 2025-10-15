import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from 'lucide-react';
export const HomePage: React.FC = () => {
  // Mock educational video data
  const videos = [{
    id: 'vid1',
    title: 'Introduction to Quantum Physics',
    channel: 'MIT OpenCourseWare',
    views: '1.2M views',
    timeAgo: '2 weeks ago',
    thumbnail: 'https://i.ytimg.com/vi/2h1E3YJMKfA/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZRVtKS9r4M-LNNUu-VO1aP3YYxcgqMzTnEJP7QUMw=s176-c-k-c0x00ffffff-no-rj',
    duration: '45:12',
    hasFlashcards: true,
    hasQuiz: true,
    summary: "Learn the foundational concepts of quantum physics including wave-particle duality, Schrödinger's equation, and quantum superposition."
  }, {
    id: 'vid2',
    title: 'The Complete JavaScript Course for Beginners',
    channel: 'Programming with Mosh',
    views: '3.4M views',
    timeAgo: '1 year ago',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZTlJRJDgJ3HYxPkwg3ZQ7wy9OrULVpj1D9u-dPY=s176-c-k-c0x00ffffff-no-rj',
    duration: '1:29:34',
    hasFlashcards: true,
    hasQuiz: true,
    summary: 'A comprehensive introduction to JavaScript fundamentals including variables, functions, objects, and DOM manipulation.'
  }, {
    id: 'vid3',
    title: 'World War II: A Complete Overview',
    channel: 'Crash Course',
    views: '5.7M views',
    timeAgo: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/Objwz0xgZqc/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZTjWd5xwkZJ4iFEZMk8EEqH7PNi5Oqnji0OZVm1Og=s176-c-k-c0x00ffffff-no-rj',
    duration: '15:42',
    hasFlashcards: true,
    hasQuiz: false,
    summary: 'An overview of the causes, major events, and consequences of World War II from 1939 to 1945.'
  }, {
    id: 'vid4',
    title: 'Calculus 1 - Full College Course',
    channel: 'Khan Academy',
    views: '2.1M views',
    timeAgo: '8 months ago',
    thumbnail: 'https://i.ytimg.com/vi/HfACrKJ_Y2w/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZQHv_r9Wh2_HDT45KXOqSGGihTYs2JQG2E3F8R-=s176-c-k-c0x00ffffff-no-rj',
    duration: '2:04:27',
    hasFlashcards: true,
    hasQuiz: true,
    summary: 'Learn limits, derivatives, and integrals with practical examples and problem-solving techniques.'
  }, {
    id: 'vid5',
    title: 'Understanding Machine Learning Algorithms',
    channel: 'Google AI',
    views: '876K views',
    timeAgo: '4 months ago',
    thumbnail: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZT3hFJBLdUwl9JHPsS0zQQB7jNCJ9qgWFbmTCdUOA=s176-c-k-c0x00ffffff-no-rj',
    duration: '32:18',
    hasFlashcards: false,
    hasQuiz: true,
    summary: 'An introduction to common machine learning algorithms including linear regression, decision trees, and neural networks.'
  }, {
    id: 'vid6',
    title: 'Spanish for Beginners - Complete Course',
    channel: 'Language Academy',
    views: '1.8M views',
    timeAgo: '7 months ago',
    thumbnail: 'https://i.ytimg.com/vi/MvEst9xDmg0/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZTDkejpvJYYz-OzWyD3zVfvzQv8ggtQQJHLfhAQQw=s176-c-k-c0x00ffffff-no-rj',
    duration: '1:12:45',
    hasFlashcards: true,
    hasQuiz: true,
    summary: 'Learn basic Spanish vocabulary, grammar, and conversation skills for beginners.'
  }, {
    id: 'vid7',
    title: 'The Solar System: Planets and Beyond',
    channel: 'National Geographic',
    views: '4.2M views',
    timeAgo: '1 year ago',
    thumbnail: 'https://i.ytimg.com/vi/libKVRa01L8/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZRWzpX-Lw4B8s0JTopHwQFUCgYQ6qQWKpsUhd4w=s176-c-k-c0x00ffffff-no-rj',
    duration: '48:32',
    hasFlashcards: true,
    hasQuiz: false,
    summary: 'Explore the planets, moons, and other celestial bodies in our solar system with stunning visuals.'
  }, {
    id: 'vid8',
    title: 'Introduction to Psychology',
    channel: 'Yale Courses',
    views: '3.5M views',
    timeAgo: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/P3FKHH2RzjI/maxresdefault.jpg',
    channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZRUEgZ1QnK-ys9h3iIJbdxHVGBJ5aKRH0jQnrYR=s176-c-k-c0x00ffffff-no-rj',
    duration: '1:15:03',
    hasFlashcards: true,
    hasQuiz: true,
    summary: 'An introduction to the major topics in psychology including perception, memory, consciousness, and social behavior.'
  }];
  return <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map(video => <div key={video.id} className="group relative">
              <Link to={`/watch/${video.id}`} className="block">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full rounded-lg object-cover aspect-video" />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 rounded text-xs">
                    {video.duration}
                  </div>
                  {/* Learning badges */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {video.hasFlashcards && <div className="bg-[#FF0000] bg-opacity-90 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                        <BookOpenIcon size={12} className="mr-1" />
                        Flashcards
                      </div>}
                    {video.hasQuiz && <div className="bg-[#FF0000] bg-opacity-90 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                        </svg>
                        Quiz
                      </div>}
                  </div>
                </div>
                <div className="mt-3 flex">
                  <div className="flex-shrink-0 mr-3">
                    <img src={video.channelIcon} alt={video.channel} className="w-9 h-9 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm leading-tight line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{video.channel}</p>
                    <p className="text-gray-400 text-xs">
                      {video.views} • {video.timeAgo}
                    </p>
                  </div>
                </div>
              </Link>
              {/* Hover summary */}
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-0 right-0 mb-2 p-3 bg-[#212121] rounded-lg shadow-lg z-10 max-w-full">
                <p className="text-sm text-white">{video.summary}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};