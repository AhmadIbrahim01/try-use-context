import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
// ThemeProvider: Provides the ThemeContext to the app.
import ThemeToggle from "./components/ThemeToggle";
// ThemeToggle: The component where users can toggle themes.

const App = () => {
    return (

      // ThemeProvider: Wraps the entire application, enabling access to the context.
        <ThemeProvider>
          {/* ThemeToggle: Consumes the context and provides the theme toggle functionality. */}
            <ThemeToggle />
        </ThemeProvider>
    );
};

export default App;
