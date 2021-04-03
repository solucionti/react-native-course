import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";


const divRoot = document.querySelector('#root');
const divTarea= document.querySelector('#tarea');

ReactDOM.render(<PrimeraApp saludo2="No tengo valor"></PrimeraApp>, divRoot);
ReactDOM.render(<CounterApp value={1000}></CounterApp>, divTarea);

