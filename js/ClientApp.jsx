// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

if (module.hot) {//it is saying any time ./App changes we need to call renderApp method.
   //we did this because HMR does not have a way to replace the entry file code/compnent
   //the HMR babel plugin creates joint for HMR reloading but it cannot do for the entry
   //component
  module.hot.accept('./App', () => {//module is aglobal variable from webpack
    renderApp();
  });
}
