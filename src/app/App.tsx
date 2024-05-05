import React, { useMemo } from 'react';

import AppRouter from './providers/router/ui/AppRouter';
import { useLocation } from 'react-router-dom';
import { Header } from '../widgets/Header';

function App() {
  const location = useLocation();

  const renderHeader = useMemo(() => {
    return location.pathname !== '/' ? <Header /> : null;
  }, [location.pathname]);

  return (
    <div className="App">
      {renderHeader}
      <AppRouter />
    </div>
  );
}

export default App;
