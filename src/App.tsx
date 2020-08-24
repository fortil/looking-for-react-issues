import React from 'react';
import Home from './pages/Home';
import Providers from './containers/Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;