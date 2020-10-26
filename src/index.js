import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/authentication/stateprovider/StateProvider';
import reducer, {initialState} from './components/authentication/stateprovider/reducer'
render(
  <StateProvider
    initialState={initialState} reducer={reducer}
  >
<App />
  </StateProvider>

,document.getElementById('root'));
