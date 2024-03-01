import { createContext } from 'react';

export enum Theme {
    LIGHT = 'theme-app--light',
    DARK = 'theme-app--dark',
    ORANGE = 'theme-app--orange',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
