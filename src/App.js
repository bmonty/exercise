import React, { useEffect, useState } from 'react';
import './App.css';

import Senators from './components/Senators';

function App() {

  const [appState, setAppState] = useState({
    loading: false,
    senators: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    
    // Load list of current senators
    const senatorApiUrl = 'https://www.govtrack.us/api/v2/role?current=true&role_type=senator'
    fetch(senatorApiUrl)
      .then(res => res.json())
      .then((data) => {
        setAppState({ senators: data })
    });

    setAppState({ loading: false });
  }, [setAppState]);

  return (
    <div className="App">
      <Senators senators={appState.senators} />
    </div>
  );
}

export default App;
