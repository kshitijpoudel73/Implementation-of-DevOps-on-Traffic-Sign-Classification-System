import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Base from './Base';


ReactDOM.render(
  
  <BrowserRouter>
  <Base/>
  </BrowserRouter>,
  
  document.getElementById('root')
);
