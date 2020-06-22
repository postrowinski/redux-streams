import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { Routing } from "./Routing";
import { useIntl } from 'react-intl';
import { Header } from '../Header/Header';

export const Navigation: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl()
    return (
        <Router>
            <Layout style={{display: 'flex', minHeight: '100vh'}}>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Content style={{flex: 1}}>
                    <Routing />
                </Layout.Content>
                <Layout.Footer>{formatMessage({id: 'layout.footer'})}</Layout.Footer>
            </Layout>
        </Router>
    );
};

