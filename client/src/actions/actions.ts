
import { LocaleActions, localeActions } from './localeAction';
import { authActions, AuthActions } from './authActions';
import { apiActions, ApiActions} from './apiActions';

export interface Actions {
    localeActions: LocaleActions;
    authActions: AuthActions;
    apiActions: ApiActions
}

export const actions: Actions = {
    localeActions,
    authActions,
    apiActions
}