import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import WithNav from './components/NavOutlet/WithNav';

import Landing from './pages/Landing/Landing';
import { modeStore } from './globalStore/globalStore';

function Router() {
  const { selectedMode } = modeStore();
  return (
    <ThemeProvider theme={selectedMode ? theme.light : theme.dark}>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/*" element={<Landing />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
