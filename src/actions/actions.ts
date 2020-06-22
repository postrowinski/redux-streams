import { ExampleActions, exampleActions } from './exampleAction';
import { LocaleActions, localeActions } from './localeAction';
import { authActions, AuthActions } from './authActions';

export interface Actions {
    exampleActions: ExampleActions;
    localeActions: LocaleActions;
    authActions: AuthActions
}

export const actions: Actions = {
    exampleActions,
    localeActions,
    authActions
}