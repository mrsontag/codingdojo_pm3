import React from 'react';
import Main from "./components/main";
import Detail from "./components/detail";
import './App.css';
import { Router } from '@reach/router';
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/detail/:id" />
        <Edit path="/edit/:id" />
      </Router>
      
    </div>
  );
}

export default App;
