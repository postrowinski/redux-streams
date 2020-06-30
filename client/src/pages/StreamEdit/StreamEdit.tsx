import * as React from 'react';
import _ from 'lodash';
import { StreamForm } from '../../components/StreamForm/StreamForm';
import { StreamDTO } from '../../../types/rest';
import { useParams, useHistory } from 'react-router';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/actions';
import { RootState } from '../../reducers/reducer';
import { History } from 'history';
import { STREAM_LIST } from '../../components/Navigation/paths';
import { State as Streams } from '../../reducers/streamReducer';

interface RouterParams {
    id: string;
}

export const StreamEdit: React.FC<{}> = (): JSX.Element => {
    const history: History = useHistory();
    const params: RouterParams = useParams<RouterParams>();
    const dispatch: Dispatch = useDispatch();
    const { fetchStream, editStream } = actions.apiActions.stream;
    const stream: Streams = useSelector<RootState, Streams>((state: RootState): Streams => state.streams);
    const initialValues: StreamDTO = stream[Number(params.id)];

    useEffect((): void => {
        dispatch(fetchStream(params.id));
      }, []);

    function onSubmit(values: StreamDTO): void {
        dispatch(editStream(values)).then((): void => history.push(STREAM_LIST));
    }

    return <StreamForm initialValues={initialValues} onSubmit={onSubmit} />;
}
