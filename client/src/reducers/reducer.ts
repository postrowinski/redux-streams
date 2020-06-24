import { exampleActions } from './../actions/exampleAction';
import { combineReducers, Reducer } from 'redux';
import { exampleReducer } from './exampleReducer';
import { localeReducer } from './localeReducer';
import { authReducer, State as AuthState } from './authReducer';
import { Locale } from '../actions/localeAction';
import { ThunkDispatch } from 'redux-thunk';
import { } from '../'
export interface RootState {
    example: number;
    exampleFetch: (dispatch: ThunkDispatch<{}, {}, any>) => Promise<any>
    locale: Locale;
    auth: AuthState
}

export const reducer: Reducer<RootState> = combineReducers({
    example: exampleReducer,
    exampleFetch: exampleActions.exampleFetchAction,
    locale: localeReducer,
    auth: authReducer
});