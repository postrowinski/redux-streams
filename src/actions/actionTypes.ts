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
}