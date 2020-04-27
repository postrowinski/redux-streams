import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

const StreamShowBody: React.FC<{}> = (): JSX.Element => {
    return (
        <></>
    )
}

declare type StreamShowType = ConnectedComponent<React.FC<{}>, Pick<{}, never>>;
export const StreamShow: StreamShowType = connect()(StreamShowBody);