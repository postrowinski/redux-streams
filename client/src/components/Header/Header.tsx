import React from 'react';
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { STREAM_LIST, STREAM_CREATE } from '../Navigation/paths';
import { History } from 'history';
import { GoogleAuth } from '../GoogleAuth/GoogleAuth';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/reducer';
import { State as AuthState } from '../../reducers/authReducer';

export const Header: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const history: History = useHistory();
    const auth: AuthState = useSelector<RootState, AuthState>((state: RootState): AuthState => state.auth);
    return (
        <Row type='flex' justify='space-between'>
            <Col>
                <Button onClick={(): void => history.push(STREAM_LIST)} style={{marginRight: 36}}>
                    {formatMessage({id: 'link.streams'})}
                </Button>
                {auth.isSignedIn &&
                    <Button type='primary' onClick={(): void => history.push(STREAM_CREATE)}>
                        {formatMessage({id: 'button.create.stream'})}
                    </Button>
                }
            </Col>
            <Col>
                <ChangeLanguage />
                <GoogleAuth />
            </Col>
        </Row>
    );
}