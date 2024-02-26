import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/uikit/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

// eslint-disable-next-line react/display-name
export const LanguageSwitcher = memo(({ className = '', short }: LanguageSwitcherProps) => {
    const {
        t,
        i18n
    } = useTranslation();

    const changeLanguage = async() => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={changeLanguage}
            className={classNames(cls.languageSwitcher, {}, [className])}
        >
            {t(short ?  'Короткий язык' : 'Язык: RUS')}
        </Button>
    );
});

