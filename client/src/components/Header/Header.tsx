import React from 'react';
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { STREAM_LIST } from '../Navigation/paths';
import { History } from 'history';
import { GoogleAuth } from '../GoogleAuth/GoogleAuth';

export const Header: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const history: History = useHistory();
    return (
        <Row type='flex' justify='space-between'>
            <Col>
                <Button onClick={(): void => history.push(STREAM_LIST)}>
                    {formatMessage({id: 'link.streams'})}
                </Button>
            </Col>
            <Col>
                <ChangeLanguage />
                <GoogleAuth />
            </Col>
        </Row>
    );
}