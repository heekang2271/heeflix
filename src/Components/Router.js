import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Redirect to="/" />
        </Switch>
    </Router>
)