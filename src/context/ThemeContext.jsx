import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		console.log("Here");
		setDarkMode(!darkMode);
		document.body.classList.add(darkMode ? "dark_mode" : "light_mode");
		document.body.classList.remove(darkMode ? "light_mode" : "dark_mode");
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
