import React from 'react';
import './App.css';
import Context, { walletContextDefaultParams } from './common/Contexts/Index';
import Navigation from './common/Navigation/Index';
import Dashboard from './common/TokensDashboard/Index';


function App() {
  return (
    <div className="App">
      <Context.Provider value={walletContextDefaultParams}>
        <Navigation/>
        <Dashboard/>
      </Context.Provider>
    </div>
  );
}

export default App;
