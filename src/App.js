import React, { useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'


const Screen1 = loadable(() => pMinDelay(import(/* webpackChunkName: "Screen1" */ './Screen1'), 1000), {
    fallback: <div>Loading...</div>
});

const Screen2 = loadable(() => import(/* webpackChunkName: "Screen2" */ './Screen2'), {
    fallback: <div>Loading...</div>
});

const Screen3 = loadable(() => import(/* webpackChunkName: "Screen3" */ './Screen3'), {
    fallback: <div>Loading...</div>
});

// const Screen2 = loadable(() => { import("./Screen2") }, {
//     fallback: () => <div>loading...</div>
// })

// const Screen3 = loadable(() => { import("./Screen3") }, {
//     fallback: () => <div>loading...</div>
// })

const App = () => {
    return (
        <Router>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/screen1">screen1</Link>
                </li>
                <li>
                    <Link to="/screen2">screen2</Link>
                </li>
                <li>
                    <Link to="/screen3">screen3</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/screen1" component={Screen1}>
                </Route>
                <Route path="/screen2" >
                    <Screen2 />
                </Route>
                <Route path="/screen3" >
                    <Screen3 />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;