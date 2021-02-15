import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Detail from "../Routes/Detail";
import Header from "../Components/Header";
import Video from "../Routes/Video";
import Product from "../Routes/Product";
import Season from "../Routes/Season";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/show" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" exact component={Detail} />
            <Route path="/show/:id" exact component={Detail} />
            <Route path="/movie/:id/video" component={Video} />
            <Route path="/show/:id/video" component={Video} />
            <Route path="/movie/:id/product" component={Product} />
            <Route path="/show/:id/product" component={Product} />
            <Route path="/show/:id/season" component={Season} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)