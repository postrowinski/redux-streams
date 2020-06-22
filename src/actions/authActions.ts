import { Action, ActionType } from './actionTypes';


export interface AuthActions {
    signIn(userId: string): Action<string>;
    signOut(): Action;
}

function signIn(userId: string): Action<string> {
    return {
        type: ActionType.SIGN_IN,
        payload: userId
    }
}

function signOut(): Action {
    return {
        type: ActionType.SIGN_OUT,
    }
}

export const authActions: AuthActions = {
    signIn,
    signOut
}