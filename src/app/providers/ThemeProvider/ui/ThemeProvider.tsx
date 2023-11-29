import React, { FC, PropsWithChildren, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props: PropsWithChildren<ThemeProviderProps>) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
