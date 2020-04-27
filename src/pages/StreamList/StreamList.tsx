import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

const StreamListBody: React.FC<{}> = (): JSX.Element => {
    return (
        <></>
    )
}

declare type StreamListType = ConnectedComponent<React.FC<{}>, Pick<{}, never>>;
export const StreamList: StreamListType = connect()(StreamListBody);