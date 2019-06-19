import React, {useState, useEffect } from 'react';
import Manager from './Manager';

function App() {
  const [loading, setLoading] = useState(true);
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    fetch('/api/init')
      .then(res => res.json())
      .then(jsonRes => {
        setAppData(jsonRes);
        setLoading(false);
      });
  }, []);

  return (
      <div className="App">
        { !loading && <Manager appData={appData} />}
      </div>
  );
}

export default App;
