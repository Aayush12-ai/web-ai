import React, { useContext } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout, points } = useContext(AuthContext);

  return (
    <nav className="bg-secondary text-background p-4 sticky top-0 z-50 shadow-lg shadow-accent/20">
      <div className="container mx-auto flex items-center gap-6 px-4">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <RouterLink to="/" className="text-2xl font-bold text-accent hover:opacity-80 transition-colors duration-200 flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            EliteLabs
          </RouterLink>
        </div>

        {/* Center: Nav links */}
        <div className="flex-1 flex justify-center gap-8">
          <RouterLink to="/about" className="text-background hover:text-accent hover:underline transform hover:scale-105 transition duration-150">About</RouterLink>
          <RouterLink to="/features" className="text-background hover:text-accent hover:underline transform hover:scale-105 transition duration-150">Features</RouterLink>
          <RouterLink to="/challenges" className="text-background hover:text-accent hover:underline transform hover:scale-105 transition duration-150">Challenges</RouterLink>
          <RouterLink to="/docs" className="text-background hover:text-accent hover:underline transform hover:scale-105 transition duration-150">Docs</RouterLink>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1 rounded text-background font-semibold">
                <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-background">{points} XP</span>
              </div>
              <button onClick={logout} className='glow-button glow-button-red'>Logout</button>
            </>
          ) : (
            <>
              <RouterLink to="/login" className='glow-button glow-button-red'>Login</RouterLink>
              <RouterLink to="/signup" className='glow-button glow-button-green'>Sign Up</RouterLink>
            </>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

