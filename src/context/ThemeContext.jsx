import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		console.log("Here:", darkMode);
		document.body.classList.add(darkMode ? "light_mode" : "dark_mode");
		document.body.classList.remove(darkMode ? "dark_mode" : "light_mode");
		setDarkMode(!darkMode);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
