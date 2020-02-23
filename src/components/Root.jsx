import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Layout, Menu, Switch as AntSwitch } from 'antd';

import i18n from '../i18n';

import Home from './pages/Home';
import I18nextPage from './pages/I18next';
import Essentials from './pages/Essentials';
import Interpolation from './pages/Interpolation';
import Formatting from './pages/Formatting';
import Plurals from './pages/Plurals';
import Nesting from './pages/Nesting';
import Context from './pages/Context';

function Root() {
    const handleLanguageChange = () => {
        i18n.changeLanguage((i18n.language === 'en') ? 'ko' : 'en');
    };

    return (
        <Layout style={{ width: '100%', height: '100%' }}>
            <Layout.Header>
                <AntSwitch checkedChildren="en" unCheckedChildren="ko" defaultChecked onChange={handleLanguageChange} />
            </Layout.Header>
            <Layout>
                <Router>
                    <Layout.Sider collapsible trigger={null}>
                        <Menu theme="dark">
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/i18next">I18next</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/essentials">Essentials</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/interpolation">Interpolation</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/formatting">Formatting</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/plurals">Plurals</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/nesting">Nesting</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/context">Context</Link>
                            </Menu.Item>
                        </Menu>
                    </Layout.Sider>
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/i18next">
                                <I18nextPage />
                            </Route>
                            <Route path="/essentials">
                                <Essentials />
                            </Route>
                            <Route path="/interpolation">
                                <Interpolation />
                            </Route>
                            <Route path="/formatting">
                                <Formatting />
                            </Route>
                            <Route path="/plurals">
                                <Plurals />
                            </Route>
                            <Route path="/nesting">
                                <Nesting />
                            </Route>
                            <Route path="/context">
                                <Context />
                            </Route>
                        </Switch>
                    </Layout.Content>
                </Router>
            </Layout>
        </Layout>
    );
}

export default Root;