import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Moments from './moments-page/MomentsPage';

const BASE_URL = "http://localhost:8080/moments/"
const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = BASE_URL

root.render(
  <React.StrictMode>
    <Moments />
  </React.StrictMode>
);


