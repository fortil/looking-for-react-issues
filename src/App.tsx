import React from 'react';
import Home from './pages/Home';
import Providers from './containers/Providers';

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;