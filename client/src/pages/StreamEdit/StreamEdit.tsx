import * as React from 'react';
import _ from 'lodash';
import { StreamForm } from '../../components/StreamForm/StreamForm';
import { StreamDTO } from '../../../types/rest';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/actions';
import { RootState } from '../../reducers/reducer';

interface RouterParams {
    id: string;
}

export const StreamEdit: React.FC<{}> = (): JSX.Element => {
    const params: RouterParams = useParams<RouterParams>();
    const dispatch: Dispatch = useDispatch();
    const { fetchStream } = actions.apiActions.stream;
    const stream: any = useSelector<RootState, any>((state: RootState): any => state.streams);

    useEffect((): void => {
      dispatch(fetchStream(params.id));
    }, []);

    useEffect(() => {
       console.log(stream);
    }, [stream]);

    const initialValues: Partial<StreamDTO> = {
        description: '',
        title: ''
    }

    return <StreamForm initialValues={initialValues} />
}
