import React from "react";
import { render } from "react-dom";
import App from './components/app.jsx';

const data = [
  {
    _id: 0,
    term: 'Dinosaur',
    definition: 'A big chompy boi'
  },
  {
    _id: 1,
    term: 'Apple',
    definition: 'A happy red boi'
  },
  {
    _id: 2,
    term: 'Programmer',
    definition: 'A sad tired boi'
  }
];

render(
  <App data={data} />,
  document.getElementById("root")
);