import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button } from 'shared/uikit/Button/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.theme}/>
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

