export interface Action<T = any> {
    type: ActionType;
    payload?: T
}

export enum ActionType {
    EXAMPLE = 'EXAMPLE',
    FETCH_EXAMPLE = 'FETCH_EXAMPLE',
    CHANGE_LOCALE = 'CHANGE_LOCALE',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    CREATE_STREAM = 'CREATE_STREAM',
    FETCH_STREAMS = 'FETCH_STREAMS',
    FETCH_STREAM = 'FETCH_STREAM',
    DELETE_STREAM = 'DELETE_STREAM',
    EDIT_STREAM = 'EDIT_STREAM'
}