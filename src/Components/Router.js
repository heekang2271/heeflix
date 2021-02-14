import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "../Components/Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" component={Movie} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search}/>
            <Redirect to="/" />
        </Switch>
    </Router>
)