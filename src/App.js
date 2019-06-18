import React, {useState, useEffect } from 'react';
import Manager from './Manager';

function App() {
  const [loading, setLoading] = useState(true);
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/init')
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
