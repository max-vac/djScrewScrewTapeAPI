import React from 'react';
import Home from './Home.component';
import Artists from './Artists.component';
import Albums from './Albums.component';
import { Link, Route, Switch } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <div>DJ Screw Diary of the Originator Discography</div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/artists">Artists!</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
