import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import "./main.scss";

import {PageAbout} from "./components/pages/about/page-about";
import {PageImages} from "./components/pages/images/page-images";
import {PageWeather} from "./components/pages/weather/page-weather";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={`/about`}>
                        <PageAbout/>
                    </Route>
                    <Route path={`/images`}>
                        <PageImages/>
                    </Route>
                    <Route path={`/weather`}>
                        <PageWeather/>
                    </Route>
                    <Route path={`/`}>
                        <PageAbout/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
