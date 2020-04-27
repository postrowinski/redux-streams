import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

const StreamEditBody: React.FC<{}> = (): JSX.Element => {
    return (
        <></>
    )
}

declare type StreamEditType = ConnectedComponent<React.FC<{}>, Pick<{}, never>>;
export const StreamEdit: StreamEditType = connect()(StreamEditBody);