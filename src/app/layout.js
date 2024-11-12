import './globals.css';
// import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: 'Template',
  description: 'Welcome to Beqa Tvildiani\'s personal Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <nav className="bg-gray-800 p-4 min-h-screen w-64">
            <ul className="flex flex-col gap-5 text-lg">
              <li><a href="/" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Home</a></li>
              <li><a href="Page_1" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Page 1</a></li>
              <li><a href="Page_2" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Page 2</a></li>
              <li><a href="Page_3" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Page 3</a></li>
            </ul>
          </nav>

          {/* Main content */}
          <main className="bg-gray-900 min-h-screen flex-grow p-4">{children}</main>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 w-full">
          <div className="container mx-auto text-center">
            <p>&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}