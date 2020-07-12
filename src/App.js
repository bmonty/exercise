import React, { useEffect, useState } from 'react';
import './App.css';

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
    console.log('Getting Nobel Prize Data')

    const nobelPrizeApiUrl = 'http://api.nobelprize.org/v1/prize.json';

    fetch(nobelPrizeApiUrl)
      .then(res => res.json())
      .then((nobelPrizes) => {
        setNobelPrizeState({ loading: false, nobelPrizes: nobelPrizes });
      });
  }, []);
  
  return (
    <div className="App">
      <SenatorsLoading isLoading={senatorState.loading} senators={senatorState.senators} />
      <NobelPrizeLoading isLoading={nobelPrizeState.loading} nobelPrizes={nobelPrizeState.nobelPrizes} />
    </div>
  );
}

export default App;
