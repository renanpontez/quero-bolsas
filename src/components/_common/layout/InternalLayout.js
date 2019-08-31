import React from 'react';
import PropTypes from "prop-types";
import Header from '../header/'

const InternalLayout = ({ children, title }) => (   
  <div id="InternalLayout">
    <Header />
    {children}
  </div>
);  



export default InternalLayout;
