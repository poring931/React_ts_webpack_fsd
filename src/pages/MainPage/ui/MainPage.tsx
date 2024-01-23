import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('mainpage');

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
