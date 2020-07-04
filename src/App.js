import React from 'react'
import Competition from './pages/Competition/Competition'
import League from './pages/league/league'
import Club from './pages/Club/club'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="body">
            <Switch>
            <Route path="/" exact component={Competition}></Route>
            <Route path="/league/:id" exact component={League}></Route>
            <Route path="/league/:id/equipe/:id" component={Club}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}







