import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const TopicsPage = () => {

  return (
    <div>
      <h1> TopicsPage </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/topics' component={ TopicsPage } />
        <Route path='/topics/:topicId' component={ TopicsPage } />
      </Switch>
    </div>
  );
}

export default App;
