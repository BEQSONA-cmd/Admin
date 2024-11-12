


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <main className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to the Admin Panel
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Manage your settings, view reports, and configure options here.</p>
        <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300">
          Get Started
        </button>
      </main>
    </div>
  );
}
