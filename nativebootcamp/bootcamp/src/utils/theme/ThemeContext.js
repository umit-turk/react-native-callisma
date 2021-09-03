import  React, {  useContext,createContext, useState, useMemo } from "react";

const ThemeContext = createContext(null);

const themes = {
    lightTheme: {
        backroundColor: "#fff",
        color: "#000"
    },
    darkTheme: {
        backgroundColor: "#000",
        color: "#fff"
    }
}

const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(darkMode => !darkMode)
    };

   // const theme = isDarkMode ? themes.darkTheme : themes.lightTheme

    const theme = useMemo(() => {
        console.log("use memo render oldu.")
      return  isDarkMode ? themes.darkTheme : themes.lightTheme
    }, [isDarkMode])

    const value = {theme, toggleTheme, isDarkMode}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useThemeContext = () => {
    const  context = useContext(ThemeContext)

    return context
}

export {ThemeContext, ThemeProvider, useThemeContext};