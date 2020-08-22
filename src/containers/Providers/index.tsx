import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

function Providers(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default Providers;