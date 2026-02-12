import * as React from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import Overview from 'routing/Overview.tsx';
import { PageNotFound } from './routing/pageNotFound/PageNotFound.tsx';
import Catalog from './routing/Catalog.tsx';

type RoutesProps = {
    children?: React.ReactNode[] | React.ReactNode;
};

const createRouter = (children: React.ReactNode) => createBrowserRouter(createRoutesFromElements(
    <Route
        path={'/'}
        element={children}
    >
        <Route
            path={'/overview'}
            element={
                <Suspense fallback={'Loading...'}>
                    <Overview/>
                </Suspense>
            }
        />
        <Route
            path={'/'}
            element={
                <Suspense fallback={'Loading...'}>
                    <Overview/>
                </Suspense>
            }
        />
        <Route
            path={'/catalog'}
            element={
                <Suspense fallback={'Loading...'}>
                    <Catalog/>
                </Suspense>
            }
        />
        <Route
            path={'/*'}
            element={
                <PageNotFound/>
            }
        />
    </Route>,
));

const AppRouter: React.FC<RoutesProps> = (props) => {
    const { children } = props;

    const appRoutes = useMemo(() => createRouter(children), [children]);

    return (
        <RouterProvider router={appRoutes} />
    );
};

export default AppRouter;
