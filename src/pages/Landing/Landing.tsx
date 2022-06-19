import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

import { PageFrame } from '../../components/PageFrame/PageFrame';
import Cards from '../Cards/Cards';
import Calculator from '../Calculator/Calculator';

function Landing() {
  return (
    <PageFrame>
      <Nav />
      <Routes>
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </PageFrame>
  );
}

export default Landing;
