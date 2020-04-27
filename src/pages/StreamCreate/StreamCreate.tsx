import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

const StreamCreateBody: React.FC<{}> = (): JSX.Element => {
    return (
        <></>
    )
}

declare type StreamCreateType = ConnectedComponent<React.FC<{}>, Pick<{}, never>>;
export const StreamCreate: StreamCreateType = connect()(StreamCreateBody);