import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './app/App';

/* Import all Pages and Components Below */
// import Home from './app/components/DS/Home/Home';
// import Started from './app/components/DS/Started/Started';
// import Styles from './app/components/DS/Styles/Styles';
// import Components from './app/components/DS/Components/Components';
// import NotFound from './app/components/DS/NotFound/NotFound';


const el = document.querySelector('#app');
console.log('Using Reactwebpackboilerplate created by Vaibhav Shringarpure');
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), el);


