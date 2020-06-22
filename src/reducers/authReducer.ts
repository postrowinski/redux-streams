import { Action, ActionType } from '../actions/actionTypes';

export interface State {
    isSignedIn: boolean | null;
    userId: string | null;
}

const INITIAL_STATE: State  = {
    isSignedIn: null,
    userId: null
}

export function authReducer(state: State = INITIAL_STATE, action: Action<string>): State {
    switch(action.type) {
        case ActionType.SIGN_IN: {
            return  {
                ...state,
                isSignedIn: true,
                userId: action.payload!
            };
        }
        case ActionType.SIGN_OUT: {
            return {
                ...state,
                isSignedIn: false,
                userId: null
            };
        }
        default: {
            return state;
        }
    }
}