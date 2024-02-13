import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from 'widgets/Sidebar/ui/SideBarItem/SideBarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>

            <div className={cls.navigation}>
                {itemsList}
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

