import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		document.body.classList.add(newMode ? "dark_mode" : "light_mode");
		document.body.classList.remove(newMode ? "light_mode" : "dark_mode");
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
