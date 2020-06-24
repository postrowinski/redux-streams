import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import _ from 'lodash';
import { useIntl } from 'react-intl';
import { RootState } from '../../reducers/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { actions } from '../../actions/actions';
import { State as AuthState } from '../../reducers/authReducer';

const clientId: string = '408171377410-a94b53i877bbson2169uuk4035j8c04b.apps.googleusercontent.com';

export const GoogleAuth: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const authState: AuthState = useSelector<RootState, AuthState>((state: RootState): AuthState => state.auth);
    const dispatch: Dispatch = useDispatch();
    const { signIn, signOut } = actions.authActions;
    const [auth, setAuth] = useState<any>(null);
    const [userName, setUserName] = useState<string>('');
    useEffect((): void => {
        // @ts-ignore
        window.gapi.load('client:auth2', (): void => {
            // @ts-ignore
            window.gapi.client.init({
                clientId,
                scope: 'email'
            }).then((): void => {
                // @ts-ignore
                setAuth(window.gapi.auth2.getAuthInstance());
            });
        });
    }, []);

    useEffect((): void => {
        if (!_.isNil(auth)) {
            onAuthChange(auth.isSignedIn.get());
            auth.isSignedIn.listen(onAuthChange);
        }
    }, [auth]);

    function onAuthChange(isSignedIn: boolean): void {
        if (isSignedIn) {
            setUserName(auth.currentUser.get().getBasicProfile().getName());
            dispatch(signIn(auth.currentUser.get().getId()));
        } else {
            dispatch(signOut());
            setUserName('');
        }
    }

    return (
        <>
            {!_.isNil(auth) &&
                <>
                    {authState.isSignedIn ?
                        <Button type='danger' onClick={auth.signOut}>
                           {userName} {formatMessage({id: 'button.logout'})}
                        </Button> :
                        <Button type='danger' onClick={auth.signIn}>
                            {formatMessage({id: 'button.login'})}
                        </Button>
                    }
                </>
            }
        </>
    )
}