import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/reducer';
import { State as Streams } from '../../reducers/streamReducer';
import { Dispatch } from 'redux';
import { actions } from '../../actions/actions';
import _ from 'lodash';
import { StreamDTO } from '../../../types/rest';
import { StreamItem } from '../../components/StreamItem/StreamItem';

const classNamePrefix: 'stream' = 'stream';

export const StreamList: React.FC<{}> = (): JSX.Element => {
    const streams: Streams = useSelector<RootState, Streams>((state: RootState): Streams => state.streams);
    const dispatch: Dispatch = useDispatch();
    const { fetchStreams } = actions.apiActions.stream;

    useEffect((): void => {
        dispatch(fetchStreams());
    }, []);

    return (
        <>
            <ul className={`${classNamePrefix}__list`}>
                {_.map((streams), (value: StreamDTO): JSX.Element => {
                    return (
                        <StreamItem key={value.id} {...value} classNamePrefix={classNamePrefix} />
                    );
                })}
            </ul>
        </>
    )
}
