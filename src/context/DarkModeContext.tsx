// "use client";

// import { createContext, useEffect, useState, ReactNode } from "react";

// interface DarkModeContextType {
//     isDarkMode: boolean;
//     toggleDarkMode: () => void;
// }

// export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// interface DarkModeProviderProps {
//     children: ReactNode;
// }

// const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = useState<boolean | null>(true);

//     useEffect(() => {
//         const storedPreference = localStorage.getItem("theme");
//         const prefersDarkMode = storedPreference === "dark";

//         setIsDarkMode(prefersDarkMode);

//         if (prefersDarkMode) {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
        
//         document.documentElement.style.overflowY = 'auto';
//     }, []);

//     const toggleDarkMode = () => {
//         setIsDarkMode((prev) => {
//             const newValue = !prev;
//             localStorage.setItem("theme", newValue ? "dark" : "light");
//             document.documentElement.classList.toggle("dark", newValue);
//             return newValue;
//         });
//     };

//     if (isDarkMode === null) {
//         return null;
//     }

//     return (
//         <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//             {children}
//         </DarkModeContext.Provider>
//     );
// };

// export default DarkModeProvider;
"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Always default to dark mode if no preference is stored
        if (typeof window !== "undefined") {
            const storedPreference = localStorage.getItem("theme");
            if (storedPreference) {
                return storedPreference === "dark";
            }
        }
        return true; // Default to dark mode if no preference found
    });

    useEffect(() => {
        // Apply the theme on initial load based on the state
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        // Ensure scroll is enabled
        document.documentElement.style.overflowY = 'auto';
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newMode);
            return newMode;
        });
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
