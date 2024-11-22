// ThemeToggle.js
// useContext: A React hook used to access the context value directly inside functional components.
import React, { useContext } from "react";
// ThemeContext: The context object created earlier, containing the theme and toggleTheme values.
import { ThemeContext } from "../components/ThemeContext";

// ThemeToggle: A functional component that accesses the ThemeContext values using useContext.
const ThemeToggle = () => {
    // theme: Current theme value (light or dark).
    // toggleTheme: Function to switch between themes.
    // useContext(ThemeContext) is a React Hook that accesses the value provided by the ThemeContext.Provider.
    
    // So, calling useContext(ThemeContext) returns this object:
    // { theme: "light", toggleTheme: function toggleTheme() { ... } }
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        light: {
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "20px",
            textAlign: "center",
        },
        dark: {
            backgroundColor: "#333333",
            color: "#ffffff",
            padding: "20px",
            textAlign: "center",
        },
    };

    return (
        <div style={styles[theme]}>
            <h1>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeToggle;
