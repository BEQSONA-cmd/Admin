"use client";

import './globals.css';
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';


// export const metadata = {
//   title: 'Admin Panel',
//   description: 'Welcome to the Admin Panel Template',
// };

function Sidebar() {
  return (
    <nav className="bg-gray-800 p-6 min-h-screen w-60 space-y-4 border-r border-black">
      <div className="flex items-center mb-8">
        <a href="/" className="text-gray-300 duration-300 hover:text-white flex items-center text-3xl font-semibold">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" /> Admin </a>
      </div>
      <ul className="space-y-4 text-lg">
        <li><a href="Page_0" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 page 0</a></li>
        <li><a href="Page_1" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 1</a></li>
        <li><a href="Page_2" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 2</a></li>
        <li><a href="Page_3" className="text-gray-300 duration-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg flex items-center">📄 Page 3</a></li>
      </ul>
    </nav>
  );
}


function LoginModal({ isOpen, onClose }) {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login submitted");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function NavigationBar() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-4 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
            <FaBell size={20} />
          </button>
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            onClick={() => setLoginModalOpen(true)}
          >
            <FaUserCircle size={24} />
          </button>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
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
        <footer className="bg-gray-800 p-4 text-center border-t border-black">
          <p className="text-gray-400">&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
        </footer>
      </body>
    </html>
  );
}