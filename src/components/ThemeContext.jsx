// ThemeContext.js
import React, { createContext, useState } from "react";


//Creates a context object named ThemeContext.
//This object will be used by components to access the theme state and toggle functionality.
export const ThemeContext = createContext();

//ThemeProvider: A React component that wraps the app to provide access to the ThemeContext value.
//children: Represents all components inside the ThemeProvider. This allows us to pass down the context to any child components.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        // ThemeContext.Provider: A component that wraps around children to provide the shared theme state and toggleTheme function to all components inside it.
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};