import { createContext, useState } from 'react';

export const themes = {
  light: 'light',
  dark: 'dark'
};

const defaultTheme = localStorage.getItem('theme') || themes.dark;

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === themes.dark ? themes.light : themes.dark;
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}