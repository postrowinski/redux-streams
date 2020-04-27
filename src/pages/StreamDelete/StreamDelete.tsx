import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

const StreamDeleteBody: React.FC<{}> = (): JSX.Element => {
    return (
        <></>
    )
}

declare type StreamDeleteType = ConnectedComponent<React.FC<{}>, Pick<{}, never>>;
export const StreamDelete: StreamDeleteType = connect()(StreamDeleteBody);