import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import LightIcon from '../assets/icons/theme-light.svg';
import DarktIcon from '../assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={() => toggleTheme()}
        >
            {theme === Theme.DARK ? <DarktIcon /> : <LightIcon/>}
        </Button>
    );
});

