import { combineReducers, Reducer } from 'redux';
import { localeReducer } from './localeReducer';
import { authReducer, State as AuthState } from './authReducer';
import { Locale } from '../actions/localeAction';
import { streamReducer, State as Streams } from './streamReducer';
export interface RootState {
    locale: Locale;
    auth: AuthState;
    streams: Streams;
}

export const reducer: Reducer<RootState> = combineReducers({
    locale: localeReducer,
    auth: authReducer,
    streams: streamReducer
});