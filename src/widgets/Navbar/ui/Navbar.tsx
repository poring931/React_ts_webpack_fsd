import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY}  to={'/'}>{t('Главная')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY}  to={'/about'}>{t('О нас')}</AppLink>

        </nav>
    );
};
