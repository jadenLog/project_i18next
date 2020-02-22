import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Home from './pages/Home';
import Essentials from './pages/Essentials';
import Interpolation from './pages/Interpolation';
import Formatting from './pages/Formatting';
import Plurals from './pages/Plurals';
import Nesting from './pages/Nesting';
import Context from './pages/Context';

function Root() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/essentials">Essentials</Link>
                    </li>
                    <li>
                        <Link to="/interpolation">Interpolation</Link>
                    </li>
                    <li>
                        <Link to="/formatting">Formatting</Link>
                    </li>
                    <li>
                        <Link to="/plurals">Plurals</Link>
                    </li>
                    <li>
                        <Link to="/nesting">Nesting</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
                </ul>
                <hr />
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
            </div>
        </Router>
    );
}

export default Root;