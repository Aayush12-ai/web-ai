import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocsContent from '../components/DocsContent';
import FileSystemDocs from '../components/FileSystemDocs';

const DocsPage = () => {
  const [topic, setTopic] = useState('basic-commands');

  const renderTopic = () => {
    switch (topic) {
      case 'basic-commands':
        return <DocsContent />;
      case 'file-system':
        return <FileSystemDocs />;
      default:
        return <div>Content coming soon...</div>;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12 flex">
        <aside className="w-1/4 pr-8">
          <h2 className="text-2xl font-bold mb-4">Topics</h2>
          <ul>
            <li className="mb-2"><a href="#" onClick={() => setTopic('basic-commands')} className={`hover:text-blue-500 ${topic === 'basic-commands' ? 'text-blue-500' : ''}`}>Basic Commands</a></li>
            <li className="mb-2"><a href="#" onClick={() => setTopic('file-system')} className={`hover:text-blue-500 ${topic === 'file-system' ? 'text-blue-500' : ''}`}>File System</a></li>
            <li className="mb-2"><a href="#" onClick={() => setTopic('permissions')} className={`hover:text-blue-500 ${topic === 'permissions' ? 'text-blue-500' : ''}`}>Permissions</a></li>
            <li className="mb-2"><a href="#" onClick={() => setTopic('networking')} className={`hover:text-blue-500 ${topic === 'networking' ? 'text-blue-500' : ''}`}>Networking</a></li>
            <li className="mb-2"><a href="#" onClick={() => setTopic('shell-scripting')} className={`hover:text-blue-500 ${topic === 'shell-scripting' ? 'text-blue-500' : ''}`}>Shell Scripting</a></li>
          </ul>
        </aside>
        <main className="w-3/4 text-gray-800 dark:text-gray-200">
          {renderTopic()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DocsPage;
