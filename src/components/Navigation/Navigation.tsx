import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { Routing } from "./Routing";
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage';

const { Header, Footer, Content } = Layout;

export const Navigation: React.FC<{}> = (): JSX.Element => (
    <Router>
        <Layout style={{display: 'flex', minHeight: '100vh'}}>
            <Header>
                <ChangeLanguage />
            </Header>
            <Content style={{flex: 1}}>
                <Routing />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </Router>
);

