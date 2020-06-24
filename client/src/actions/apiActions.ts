import { AxiosResponse } from 'axios';
import { StreamDTO } from '../../types/rest'
import streams from '../api/strems';
import { ActionType } from './actionTypes';
import { ThunkDispatch } from 'redux-thunk';

export interface ApiActions {
   stream: StreamApi;
}

interface StreamApi {
    createStream: (values: StreamDTO) => any
    fetchStreams: () => any;
    fetchStream: (id: number) => any;
    editStream: (id: number, values: StreamDTO) => any;
    deleteStream: (id: number) => any;
}

function createStream(values: StreamDTO): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.post('/streams', values);
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

function fetchStream(id: number): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.get(`/streams/${id}`);
        dispatch({
            type: ActionType.FETCH_STREAM,
            payload: response.data
        })
    }
}

function editStream(id: number, values: StreamDTO): any {
    return async function(dispatch: ThunkDispatch<{}, {}, any>): Promise<any> {
        const response: AxiosResponse<StreamDTO> = await streams.put(`/streams/${id}`, values);
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

export const apiActions: ApiActions = {
    stream: {
        createStream,
        fetchStreams,
        fetchStream,
        editStream,
        deleteStream
    }
}