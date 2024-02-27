import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/uikit/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SideBarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

interface SidebarProps {
    className?: string;
}

const component = ({ className = '' }: SidebarProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
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

export const Sidebar = memo(component);
