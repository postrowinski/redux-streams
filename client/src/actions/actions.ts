import { ExampleActions, exampleActions } from './exampleAction';
import { LocaleActions, localeActions } from './localeAction';
import { authActions, AuthActions } from './authActions';
import { apiActions, ApiActions} from './apiActions';

export interface Actions {
    exampleActions: ExampleActions;
    localeActions: LocaleActions;
    authActions: AuthActions;
    apiActions: ApiActions
}

export const actions: Actions = {
    exampleActions,
    localeActions,
    authActions,
    apiActions
}