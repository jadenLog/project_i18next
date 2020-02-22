import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';

import Home from './pages/Home';
import Essentials from './pages/Essentials';
import Interpolation from './pages/Interpolation';
import Formatting from './pages/Formatting';
import Plurals from './pages/Plurals';
import Nesting from './pages/Nesting';
import Context from './pages/Context';

function Root() {
    return (
        <Layout style={{ width: '100%', height: '100%' }}>
            <Router>
                <Layout.Sider collapsible trigger={null}>
                    <Menu theme="dark">
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/essentials">Essentials</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/interpolation">Interpolation</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/formatting">Formatting</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/plurals">Plurals</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/nesting">Nesting</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/context">Context</Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout.Content>
                    <Switch>
                        <Route exact path="/">
                            <Home />
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
    );
}

export default Root;