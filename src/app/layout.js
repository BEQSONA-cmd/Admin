import './globals.css';
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Admin Panel',
  description: 'Welcome to the Admin Panel Template',
};

function Sidebar() {
  return (
    <nav className="bg-gray-800 p-6 min-h-screen w-60 space-y-4">
      <h2 className="text-white text-xl font-semibold mb-8">Admin Panel</h2>
      <ul className="space-y-4 text-lg">
        <li><a href="/" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">🏠 Home</a></li>
        <li><a href="Page_1" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 1</a></li>
        <li><a href="Page_2" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 2</a></li>
        <li><a href="Page_3" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 3</a></li>
      </ul>
    </nav>
  );
}

function NavigationBar() {
  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-4 shadow-md">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          <FaBell size={20} />
        </button>
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          <FaUserCircle size={24} />
        </button>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex min-h-screen">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-grow flex flex-col">
            
            {/* Top Navigation Bar */}
            <NavigationBar />

            {/* Page Content */}
            <main className="bg-gray-50 dark:bg-gray-900 p-6 flex-grow">
              {children}
            </main>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-center">
          <p className="text-gray-400">&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
        </footer>
      </body>
    </html>
  );
}