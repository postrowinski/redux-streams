import { StreamApi, stream } from './api/stream';

export interface ApiActions {
   stream: StreamApi;
}

export const apiActions: ApiActions = {
    stream
}