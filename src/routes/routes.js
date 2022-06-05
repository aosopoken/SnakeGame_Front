import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from "../menu/menu";
import SnakeGame from "../SnakeGame/SnakeGame";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Menu />
            </Route>
            <Route path="/snakeGame">
                <SnakeGame />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas;