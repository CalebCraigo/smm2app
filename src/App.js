import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main';
import './App.css';

function App() {
  return (
    <Main />
    // <Router>
    //   <Routes>
    //     <Route path="/" component={Main} />
    //   </Routes>
    // </Router>
  );
}

export default App;
