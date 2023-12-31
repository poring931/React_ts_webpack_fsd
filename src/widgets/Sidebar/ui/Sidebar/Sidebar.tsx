import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/uikit/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from './assets/home.svg';
import AboutIcon from './assets/about.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.navigation__icons}>

            </div>
            <div className={cls.navigation}>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY}  to={RoutePath.main}>
                    <MainIcon className={cls.link__icon} />
                    <span className={cls.link__text}>{t('Главная')}</span>
                </AppLink>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY}  to={RoutePath.about}>
                    <AboutIcon className={cls.link__icon}  />
                    <span className={cls.link__text}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher short={collapsed} className={cls.lang} />
                <Button
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.XL}
                    square
                >
                    {collapsed ? '►' : '◄'}
                </Button>
            </div>
        </div>
    );
};

