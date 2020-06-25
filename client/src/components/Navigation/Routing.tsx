import * as React from "react";
import { Route } from 'react-router-dom';
import * as PATHS from './paths';
import { StreamList } from '../../pages/StreamList/StreamList';
import { StreamCreate } from '../../pages/StreamCreate/StreamCreate';
import { StreamShow } from '../../pages/StreamShow/StreamShow';
import { StreamDelete } from '../../pages/StreamDelete/StreamDelete';
import { StreamEdit } from '../../pages/StreamEdit/StreamEdit';

interface SingleRoute {
    exact?: boolean;
    path: string;
    component: React.FC<{}>
}

const routes: SingleRoute[] = [
    {
        exact: true,
        path: PATHS.STREAM_LIST,
        component: StreamList
    },
    {
        path: PATHS.STREAM_DELETE,
        component: StreamDelete
    },
    {
        path: `${PATHS.STREAM_EDIT}:id`,
        component: StreamEdit
    },
    {
        path: PATHS.STREAM_CREATE,
        component: StreamCreate
    },
    {
        path: PATHS.STREAM_SHOW,
        component: StreamShow
    }
]

export const Routing: React.FC<{}> = (): JSX.Element => (
    <>
        {routes.map((route: SingleRoute, index: number): JSX.Element => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component} />;
        })}
    </>
);
