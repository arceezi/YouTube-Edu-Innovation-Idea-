import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { WatchPage } from './pages/WatchPage';
import { FlashcardReviewPage } from './pages/FlashcardReviewPage';
import { LearningDashboardPage } from './pages/LearningDashboardPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return <Router>
      <div className="flex flex-col h-screen bg-[#0F0F0F] text-white font-[Roboto]">
        <Header onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar collapsed={sidebarCollapsed} />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watch/:videoId" element={<WatchPage />} />
              <Route path="/flashcards" element={<FlashcardReviewPage />} />
              <Route path="/learning-dashboard" element={<LearningDashboardPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>;
}