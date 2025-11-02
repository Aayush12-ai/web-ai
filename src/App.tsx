import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChallengesPage from './pages/ChallengesPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/challenges" element={<ChallengesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;