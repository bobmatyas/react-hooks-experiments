import React, { useEffect, useLayoutEffect } from 'react';
import './App.css';
import Checkbox from "./components/Checkbox"
import CheckboxReducer from "./components/Checkbox-reducer"
import Typing from "./components/Typing";

function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayouEffect"));
  return (
    <>
    <Checkbox />

    <Typing />
    
    <h2>Checkbox w/useReducer</h2>

    <CheckboxReducer />
    </>
  );
}

export default App;
