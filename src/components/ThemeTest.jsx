import { useDarkMode } from '../context/DarkModeContext';

export default function ThemeTest() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Theme Test</h2>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        Current theme: <span className="font-semibold">{darkMode ? 'Dark' : 'Light'}</span>
      </p>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Toggle Theme
      </button>
      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This is a test component to check if dark mode is working.
        </p>
      </div>
    </div>
  );
}
