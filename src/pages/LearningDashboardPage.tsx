import React from 'react';
import { CalendarIcon, TrendingUpIcon, BookOpenIcon, BrainIcon, BarChart3Icon, ClockIcon } from 'lucide-react';
export const LearningDashboardPage: React.FC = () => {
  // Mock learning data
  const learningStats = {
    videosWatched: 42,
    hoursWatched: 18,
    flashcardsReviewed: 156,
    quizzesTaken: 15,
    quizAccuracy: 78,
    currentStreak: 7
  };
  // Mock activity data for chart
  const activityData = [{
    day: 'Mon',
    videos: 2,
    flashcards: 15
  }, {
    day: 'Tue',
    videos: 3,
    flashcards: 20
  }, {
    day: 'Wed',
    videos: 1,
    flashcards: 10
  }, {
    day: 'Thu',
    videos: 4,
    flashcards: 25
  }, {
    day: 'Fri',
    videos: 2,
    flashcards: 18
  }, {
    day: 'Sat',
    videos: 5,
    flashcards: 30
  }, {
    day: 'Sun',
    videos: 3,
    flashcards: 22
  }];
  // Mock recent videos
  const recentVideos = [{
    id: 'vid1',
    title: 'Introduction to Quantum Physics',
    channel: 'MIT OpenCourseWare',
    thumbnail: 'https://i.ytimg.com/vi/2h1E3YJMKfA/maxresdefault.jpg',
    progress: 100,
    timestamp: '2 days ago'
  }, {
    id: 'vid2',
    title: 'JavaScript Fundamentals for Beginners',
    channel: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    progress: 75,
    timestamp: '5 days ago'
  }, {
    id: 'vid3',
    title: 'World War II: A Complete Overview',
    channel: 'Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/Objwz0xgZqc/maxresdefault.jpg',
    progress: 60,
    timestamp: '1 week ago'
  }];
  return <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Learning Dashboard</h1>
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <ClockIcon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Videos Watched</h3>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold">
                {learningStats.videosWatched}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                ({learningStats.hoursWatched} hrs)
              </span>
            </div>
          </div>
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <BookOpenIcon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Flashcards Reviewed</h3>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold">
                {learningStats.flashcardsReviewed}
              </span>
            </div>
          </div>
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <BrainIcon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Quiz Accuracy</h3>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold">
                {learningStats.quizAccuracy}%
              </span>
              <span className="text-sm text-gray-400 ml-2">
                ({learningStats.quizzesTaken} quizzes)
              </span>
            </div>
          </div>
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <TrendingUpIcon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Learning Streak</h3>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold">
                {learningStats.currentStreak} days
              </span>
            </div>
          </div>
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <CalendarIcon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Study Schedule</h3>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Next scheduled: Today, 7:00 PM</span>
              <button className="mt-2 text-[#FF0000] text-sm">
                View Schedule
              </button>
            </div>
          </div>
          <div className="bg-[#181818] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] bg-opacity-20 flex items-center justify-center mr-3">
                <BarChart3Icon size={18} className="text-[#FF0000]" />
              </div>
              <h3 className="text-sm text-gray-400">Topics Studied</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2 py-1 bg-[#272727] rounded-full text-xs">
                Physics
              </span>
              <span className="px-2 py-1 bg-[#272727] rounded-full text-xs">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-[#272727] rounded-full text-xs">
                History
              </span>
              <span className="px-2 py-1 bg-[#272727] rounded-full text-xs">
                Math
              </span>
            </div>
          </div>
        </div>
        {/* Weekly activity chart */}
        <div className="bg-[#181818] rounded-lg p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Weekly Learning Activity</h2>
          <div className="h-64 flex items-end justify-between">
            {activityData.map((day, index) => <div key={index} className="flex flex-col items-center w-1/7">
                <div className="flex flex-col items-center w-full">
                  <div className="w-full flex justify-center space-x-1">
                    <div className="w-5 bg-[#FF0000] rounded-t-sm" style={{
                  height: `${day.videos * 20}px`
                }}></div>
                    <div className="w-5 bg-[#1c62b9] rounded-t-sm" style={{
                  height: `${day.flashcards * 1.5}px`
                }}></div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{day.day}</div>
              </div>)}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-[#FF0000] rounded-sm mr-2"></div>
              <span className="text-xs text-gray-400">Videos</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#1c62b9] rounded-sm mr-2"></div>
              <span className="text-xs text-gray-400">Flashcards</span>
            </div>
          </div>
        </div>
        {/* Recent activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-medium mb-4">Recently Watched</h2>
            <div className="space-y-4">
              {recentVideos.map(video => <div key={video.id} className="bg-[#181818] rounded-lg overflow-hidden flex">
                  <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover" />
                  <div className="p-3 flex-1">
                    <h3 className="text-sm font-medium line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-400">{video.channel}</p>
                    <div className="mt-2">
                      <div className="h-1.5 bg-[#272727] rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF0000]" style={{
                      width: `${video.progress}%`
                    }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-400">
                          {video.progress}% complete
                        </span>
                        <span className="text-xs text-gray-400">
                          {video.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Recommended Next</h2>
            <div className="bg-[#181818] rounded-lg p-4">
              <h3 className="font-medium mb-2">
                Continue your learning journey
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Based on your recent activity, we recommend these videos to
                watch next:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm mr-3">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Advanced Quantum Mechanics
                    </p>
                    <p className="text-xs text-gray-400">MIT OpenCourseWare</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm mr-3">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      JavaScript: Advanced Concepts
                    </p>
                    <p className="text-xs text-gray-400">
                      Programming with Mosh
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm mr-3">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      The Cold War Explained
                    </p>
                    <p className="text-xs text-gray-400">Crash Course</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg text-sm">
                View All Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};