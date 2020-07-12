import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Senators from './components/Senators';
import NobelPrizes from './components/nobelPrizes';
import withListLoading from './components/withListLoading';

function App() {

  const SenatorsLoading = withListLoading(Senators);
  const NobelPrizeLoading = withListLoading(NobelPrizes);

  const [senatorState, setSenatorState] = useState({
    loading: true,
    senators: null,
  });

  const [nobelPrizeState, setNobelPrizeState] = useState({
    loading: true,
    nobelPrizes: null
  });

  useEffect(() => {
    console.log('Getting Senator data.')
    
    const senatorApiUrl = 'https://www.govtrack.us/api/v2/role?current=true&role_type=senator';

    fetch(senatorApiUrl)
      .then(res => res.json())
      .then((senators) => {
        setSenatorState({ loading: false, senators: senators });
      });
  }, []);

  useEffect(() => {
    console.log('Getting Nobel Prize data.')

    const nobelPrizeApiUrl = 'http://api.nobelprize.org/v1/prize.json';

    fetch(nobelPrizeApiUrl)
      .then(res => res.json())
      .then((nobelPrizes) => {
        setNobelPrizeState({ loading: false, nobelPrizes: nobelPrizes });
      });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              Second Front Exercise
            </a>
          </div>

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" to="/senators">Senators</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nobel_prizes">Nobel Prizes</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Redirect to="/senators" />
            </Route>
            <Route path="/senators">
              <SenatorsLoading isLoading={senatorState.loading} senators={senatorState.senators} />
            </Route>
            <Route path="/nobel_prizes">
              <NobelPrizeLoading isLoading={nobelPrizeState.loading} nobelPrizes={nobelPrizeState.nobelPrizes} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
