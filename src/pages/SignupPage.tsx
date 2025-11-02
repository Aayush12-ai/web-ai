import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignupPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="username">Username</label>
              <input type="text" id="username" className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="mb-6">
              <label className="block mb-2" htmlFor="password">Password</label>
              <input type="password" id="password" className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
            <Button type="submit" variant="signup" className="w-full">Sign Up</Button>
          </form>
          <div className="text-center my-4">or</div>
          <div className="flex flex-col gap-4">
            <Button variant="danger" className="w-full flex items-center justify-center gap-2"><FaGoogle className="transition-transform" /> Sign Up with Google</Button>
            <Button variant="ghost" className="w-full flex items-center justify-center gap-2"><FaGithub className="transition-transform" /> Sign Up with GitHub</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
