import React from "react";
import {
    HashRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    BrowserRouter,
} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';


import routerHistory from './stores/history';

export default function App() {
    return (
        <BrowserRouter basename="/portfolio-v2">
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Project</Link></li>
                </ul>

                <hr />
                <Route path="/about" component={About} />
                <Route path="/work" component={Projects} />
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
    // return (
    //     <p>hi</p>
    // );
}

