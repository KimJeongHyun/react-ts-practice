import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Nav/Nav';

export default function WithNav() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
