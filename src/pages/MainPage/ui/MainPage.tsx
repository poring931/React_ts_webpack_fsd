import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import cls from 'features/AuthByUsername/ui/LoginForm/LoginForm.module.scss';
import { Input } from 'shared/uikit/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('mainpage');

    const [value, setValue] = React.useState('');

    const onChange =(value:string) => {
        setValue(value);
    };

    return (
        <div>
            <BugButton/>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {t('Главная страница')}

            <Counter/>
        </div>
    );
};

export default MainPage;
