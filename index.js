import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from './src/Hello';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

import Calculation from './src/Calculation';

let calc = new Calculation();
calc.sum(10,2);
calc.substraction(10,2);
calc.multiplication(10,2);
calc.division(10,2);
