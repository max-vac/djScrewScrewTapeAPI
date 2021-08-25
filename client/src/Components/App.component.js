import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Header from './Header.component';
import Home from './Home.component';
import Artists from './Artists.component';
import Albums from './Albums.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
        </Switch>
      </div>
    );
  }
}

export default App;
