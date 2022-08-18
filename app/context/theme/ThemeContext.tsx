import React, { ReactNode, useState, useMemo } from 'react';
import { Theme } from './enums/Theme';

const ThemeContext = React.createContext({
    theme: Theme.Light,
    changeTheme: (theme: Theme) => {
        console.log(theme);
    },
});

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Context States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const [currentTheme, setCurrentTheme] = useState(Theme.Light);

    // ----------------------------------------------------------------------------------------------------
    // Context Functions
    // ----------------------------------------------------------------------------------------------------
    const changeTheme = (newTheme: Theme) => {
        setCurrentTheme(newTheme);
    };

    const ThemeProviderValue = useMemo(() => ({ theme: currentTheme, changeTheme }), [currentTheme]);

    // ----------------------------------------------------------------------------------------------------
    // Context Provider
    // ----------------------------------------------------------------------------------------------------
    return <ThemeContext.Provider value={ThemeProviderValue}>{children}</ThemeContext.Provider>;
}

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
