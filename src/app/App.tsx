import React, { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
// import { Modal } from 'shared/uikit/Modal/Modal';

const App = () => {
    // const { theme } = useTheme();

    return (
        // <div className={classNames('app page', {}, [theme])}>
        <div className={classNames('app page', {}, [])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
