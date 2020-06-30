import * as React from 'react';
import { StreamForm } from '../../components/StreamForm/StreamForm';
import { StreamDTO } from '../../../types/rest';
import { actions } from '../../actions/actions';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { STREAM_LIST } from '../../components/Navigation/paths';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export const StreamCreate: React.FC<{}> = (): JSX.Element => {
    const dispatch: Dispatch = useDispatch();
    const { createStream } = actions.apiActions.stream;
    const history: History = useHistory();
    const initialValues: Partial<StreamDTO> = {
        description: '',
        title: '',
    }

    function onSubmit(values: StreamDTO): void {
        dispatch(createStream(values)).then((): void => history.push(STREAM_LIST))
    }

    return (
        <StreamForm initialValues={initialValues} onSubmit={onSubmit} />
    )
}
