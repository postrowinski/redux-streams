import { RootState } from './../../reducers/reducer';
import { StreamDTO } from '../../../types/rest';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosResponse } from 'axios';
import streams from '../../api/strems';
import { ActionType } from '../actionTypes';


export interface StreamApi {
     createStream: (values: StreamDTO) => any
     fetchStreams: () => any;
     fetchStream: (id: string) => any;
     editStream: (values: StreamDTO) => any;
     deleteStream: (id: number) => any;
}

 function createStream(values: StreamDTO): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>, getState: () => RootState): Promise<any> {
        const { userId } = getState().auth;
        const response: AxiosResponse<StreamDTO> = await streams.post('/streams', {...values, userId});
        dispatch({
            type: ActionType.CREATE_STREAM,
            payload: response.data
        })
    }
}

function fetchStreams(): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.get('/streams');
        dispatch({
            type: ActionType.FETCH_STREAMS,
            payload: response.data
        })
    }
}

function fetchStream(id: string): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.get(`/streams/${id}`);
        dispatch({
            type: ActionType.FETCH_STREAM,
            payload: response.data
        })
    }
}

function editStream(values: StreamDTO): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.put(`/streams/${values.id}`, values);
        dispatch({
            type: ActionType.EDIT_STREAM,
            payload: response.data
        })
    }
}

function deleteStream(id: number): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        await streams.delete(`/streams/${id}`);
        dispatch({
            type: ActionType.DELETE_STREAM,
            payload: id
        })
    }
}

export const stream: StreamApi = {
    createStream,
    fetchStreams,
    fetchStream,
    editStream,
    deleteStream
}