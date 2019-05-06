import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Archery from './components/Archery/Archery';
import Loader from './components/Loader/Loader';
import TollRoad from './components/Toll-road/Toll-road';
import Converter from './components/Converter/Converter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Temperature from './components/Temperature/Temperature';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
  
        <Switch>
      <div className="container">
          <Route path="/" component={Converter} exact/>
          <Route path="/loader" component={Loader} />
          <Route path="/archery" component={Archery} />
          <Route path="/tollroad" component={TollRoad}  />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
