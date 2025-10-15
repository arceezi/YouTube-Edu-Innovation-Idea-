import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, LibraryIcon, ClockIcon, BookOpenIcon, BarChart3Icon, GraduationCapIcon, BrainIcon, ListChecksIcon, BriefcaseIcon } from 'lucide-react';
interface SidebarProps {
  collapsed: boolean;
}
export const Sidebar: React.FC<SidebarProps> = ({
  collapsed
}) => {
  return <aside className={`${collapsed ? 'w-[72px]' : 'w-[240px]'} h-full bg-[#0F0F0F] border-r border-[#272727] overflow-y-auto overflow-x-hidden transition-width duration-300 flex-shrink-0`}>
      <div className="py-2">
        {/* Main navigation */}
        <div className="mb-4">
          <Link to="/" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <HomeIcon size={20} />
            {!collapsed && <span className="ml-6">Home</span>}
          </Link>
          <Link to="/shorts" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.77 10.32C16.97 10 16.14 9.85 15.31 9.85C13.15 9.85 11.17 10.74 9.8 12.22C8.43 13.7 7.63 15.68 7.63 17.85C7.63 18.69 7.77 19.53 8.07 20.33C6.57 19.5 5.4 18.22 4.72 16.68C4.03 15.15 3.87 13.44 4.24 11.79C4.6 10.15 5.48 8.68 6.76 7.6C8.03 6.53 9.63 5.91 11.31 5.85C12.73 5.79 14.14 6.15 15.35 6.89C16.55 7.63 17.5 8.71 18.07 10L18.18 10.25L18.47 10.17C19.91 9.76 21.44 9.94 22.75 10.67C22.75 10.67 19.86 5.05 14.62 4.61C13.01 4.47 11.39 4.83 9.97 5.66C8.55 6.5 7.41 7.76 6.69 9.29C6.5 9.71 6.35 10.15 6.24 10.6C6.06 10.27 5.93 9.92 5.85 9.56C5.5 7.94 5.76 6.26 6.58 4.82C7.4 3.38 8.72 2.3 10.27 1.77C11.82 1.23 13.5 1.27 15.03 1.88C16.55 2.5 17.8 3.64 18.54 5.09C18.54 5.09 18.54 5.09 18.54 5.09L18.76 5.6L19.27 5.39C19.27 5.39 19.27 5.39 19.27 5.39C20.4 4.93 21.61 4.74 22.82 4.83C21.38 3.03 19.37 1.74 17.12 1.14C14.88 0.55 12.52 0.68 10.36 1.53C8.2 2.38 6.36 3.89 5.17 5.89C3.97 7.88 3.49 10.22 3.79 12.53C4.1 14.85 5.18 17 6.85 18.63C8.53 20.26 10.7 21.27 13.02 21.54C15.35 21.81 17.69 21.31 19.67 20.12C21.66 18.93 23.18 17.11 24.04 14.95C22.59 14.19 20.95 13.95 19.36 14.26C19.36 14.26 19.36 14.26 19.36 14.26L19.07 14.33L19.16 14.04C19.46 13.08 19.54 12.06 19.38 11.06C19.23 10.06 18.85 9.1 18.27 8.26C18.12 8.69 17.97 9.12 17.77 10.32Z" fill="white" />
            </svg>
            {!collapsed && <span className="ml-6">Shorts</span>}
          </Link>
          <Link to="/subscriptions" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z" fill="white" />
            </svg>
            {!collapsed && <span className="ml-6">Subscriptions</span>}
          </Link>
        </div>
        <div className="border-b border-[#272727] my-2"></div>
        {/* Library section */}
        <div className="mb-4">
          <Link to="/library" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <LibraryIcon size={20} />
            {!collapsed && <span className="ml-6">Library</span>}
          </Link>
          <Link to="/history" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <ClockIcon size={20} />
            {!collapsed && <span className="ml-6">History</span>}
          </Link>
        </div>
        <div className="border-b border-[#272727] my-2"></div>
        {/* Learning Tools Section */}
        {!collapsed && <div className="px-4 pt-2 pb-1">
            <h3 className="text-sm font-medium text-gray-400">
              LEARNING TOOLS
            </h3>
          </div>}
        <div className="mb-4">
          <Link to="/learning-dashboard" className="flex items-center px-4 py-2 hover:bg-[#272727] text-white">
            <BrainIcon size={20} className="text-[#FF0000]" />
            {!collapsed && <span className="ml-6">Learning Dashboard</span>}
          </Link>
          <Link to="/flashcards" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <BookOpenIcon size={20} className="text-[#FF0000]" />
            {!collapsed && <span className="ml-6">My Flashcards</span>}
          </Link>
          <Link to="/quiz-results" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <ListChecksIcon size={20} className="text-[#FF0000]" />
            {!collapsed && <span className="ml-6">Quiz Results</span>}
          </Link>
          <Link to="/continue-learning" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <GraduationCapIcon size={20} className="text-[#FF0000]" />
            {!collapsed && <span className="ml-6">Continue Learning</span>}
          </Link>
        </div>
        <div className="border-b border-[#272727] my-2"></div>
        {/* Subscriptions */}
        {!collapsed && <div className="px-4 pt-2 pb-1">
            <h3 className="text-sm font-medium text-gray-400">SUBSCRIPTIONS</h3>
          </div>}
        <div className="mb-4">
          <Link to="/channel/mit" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">
              M
            </div>
            {!collapsed && <span className="ml-6">MIT OpenCourseWare</span>}
          </Link>
          <Link to="/channel/khan" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs">
              K
            </div>
            {!collapsed && <span className="ml-6">Khan Academy</span>}
          </Link>
          <Link to="/channel/crash" className="flex items-center px-4 py-2 hover:bg-[#272727]">
            <div className="w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center text-xs">
              C
            </div>
            {!collapsed && <span className="ml-6">Crash Course</span>}
          </Link>
        </div>
      </div>
    </aside>;
};