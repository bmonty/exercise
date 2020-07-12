import React, { useEffect, useState } from 'react';
import './App.css';

import Senators from './components/Senators';
import withListLoading from './components/withListLoading';

function App() {

  const SenatorsLoading = withListLoading(Senators);

  const [appState, setAppState] = useState({
    loading_senators: false,
    senators: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    
    // Load list of current senators
    const senatorApiUrl = 'https://www.govtrack.us/api/v2/role?current=true&role_type=senator'
    fetch(senatorApiUrl)
      .then(res => res.json())
      .then((senators) => {
        setAppState({ loading_senators: false, senators: senators })
    });

    setAppState({ loading: false });
  }, [setAppState]);

  return (
    <div className="App">
      <SenatorsLoading isLoading={appState.loading_senators} senators={appState.senators} />
    </div>
  );
}

export default App;
