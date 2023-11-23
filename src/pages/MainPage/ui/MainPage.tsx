import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('mainpage');

    return (
        <div>
            <BugButton/>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {t('Главная страница')}
            https://disk.yandex.ru/i/9TxnuFntA8L3zQ
        </div>
    );
};

export default MainPage;
