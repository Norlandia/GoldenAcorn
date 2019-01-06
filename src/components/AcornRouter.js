import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GoldenAcornApp from '../containers/GoldenAcornApp';
import Norlandia from './Norlandia';
import Headline from '../components/Headline';

const AcornRouter = () => {
  return (
    <Router>
      <div>
        <Headline />
        <ul>
          <li>
            <Link to="/norlandia">Norlandia</Link>
          </li>
          <li>
            <Link to="/acornshop">Acorn Shop</Link>
          </li>
        </ul>

        <Route path="/norlandia" component={Norlandia} />
        <Route path="/acornshop" component={GoldenAcornApp} />
      </div>
    </Router>
  );
};

export default AcornRouter;
