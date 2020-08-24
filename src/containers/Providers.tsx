import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const Providers: React.FC = (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default Providers;