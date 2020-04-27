import * as React from "react";
import { Route } from 'react-router-dom';
import * as PATHS from './paths';
import { StreamList } from '../../pages/StreamList/StreamList';
import { StreamCreate } from '../../pages/StreamCreate/StreamCreate';
import { StreamShow } from '../../pages/StreamShow/StreamShow';
import { StreamDelete } from '../../pages/StreamDelete/StreamDelete';
import { StreamEdit } from '../../pages/StreamEdit/StreamEdit';

export const Routing: React.FC<{}> = (): JSX.Element => (
    <>
        <Route exact path={PATHS.STREAM_LIST} component={StreamList} />
        <Route path={PATHS.STREAM_DELETE} component={StreamDelete} />
        <Route path={PATHS.STREAM_EDIT} component={StreamEdit} />
        <Route path={PATHS.STREAM_CREATE} component={StreamCreate} />
        <Route path={PATHS.STREAM_SHOW} component={StreamShow} />
    </>
);
