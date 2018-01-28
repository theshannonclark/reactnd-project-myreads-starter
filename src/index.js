import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'

const appRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(appRouter, document.getElementById('root'))
