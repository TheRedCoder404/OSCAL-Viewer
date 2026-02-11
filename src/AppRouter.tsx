import * as React from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import type { Router } from '@remix-run/router';
import { Suspense, useMemo } from 'react';
import Overview from 'routing/Overview.tsx';
import {PageNotFound} from "./routing/pageNotFound/PageNotFound.tsx";

type RoutesProps = {
    children?: React.ReactNode[] | React.ReactNode;
};

const createRouter = (children: React.ReactNode): Router => createBrowserRouter(createRoutesFromElements(
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
