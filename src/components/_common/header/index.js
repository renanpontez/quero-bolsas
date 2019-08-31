import React from 'react';
import TopBar from './TopBar';
import Menu from './Menu';
import Breadcrumb from './Breadcrumb';

const Header = () => {
  return (
    <>
      <div id="Header">
        <TopBar />
        <Menu />
        <Breadcrumb />
      </div>
    </>
  );
}

export default Header;