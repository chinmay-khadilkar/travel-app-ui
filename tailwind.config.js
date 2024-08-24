/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      colors: {
        mac: {
          'light-gray': '#E5E5E5', // Window background
          'dark-gray': '#D1D1D1',  // Window border
          'blue': '#007AFF',       // Default accent color
          'green': '#34C759',      // Green accent color (e.g., active button)
          'red': '#FF3B30',        // Red accent color (e.g., close button)
          'yellow': '#FFCC00',     // Yellow accent color (e.g., minimize button)
          'dark-blue': '#1D4ED8',  // Active/hover blue
          'black': '#1C1C1E',      // macOS dark mode background
          'white': '#FFFFFF',      // Text and icons
          'light-blue': '#F0F8FF', // Background of selected items
          'divider': '#D0D0D0',    // Divider color
        },
      },
      fontFamily: {
        // macOS-like system font
        'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        // macOS-like shadows
        'mac-window': '0 0 15px rgba(0, 0, 0, 0.15)', // Subtle shadow for windows
      },
      borderRadius: {
        'mac': '12px', // Rounded corners similar to macOS windows
      },
    },
  },
  plugins: [],
}

