import React from 'react';
import { Provider } from 'react-redux';
// import { HotKeys } from 'react-hotkeys';
import store from '../../store';

// const keyMap = {
//   SNAP_LEFT: 'command+left',
//   DELETE_NODE: ['del', 'backspace'],
//   MOVE_DOWN: 'down',
//   MOVE_UP: 'up',
//   SUBMIT: 'enter',
// };

function Providers(props) {
  return (
    <Provider store={store}>
      {/* <HotKeys keyMap={keyMap}> */}
      {props.children}
      {/* </HotKeys> */}
    </Provider>
  );
}

export default Providers;