 import { createContext, useState, useEffect } from "react";
 

 type theme = "light" | "dark";

    interface ThemeContextType {
        theme: theme;
        toggleTheme: () => void;
    }

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as theme | null
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }

    }, [])
    const toggleTheme = () => {
        setTheme((prev) => {
            const newtheme = prev === "light" ? "dark" : "light"
            localStorage.setItem("theme", newtheme);
            document.documentElement.classList.toggle("dark", newtheme === "dark");
            return newtheme;
        })
    }
    
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}