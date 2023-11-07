import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader/ui/Loader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<Loader/>}>

            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={(
                        <div className="page-content">
                            {element}
                        </div>
                    )}/>
                ))}
            </Routes>
        </Suspense>
    );
};

