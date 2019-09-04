import React from 'react';

const Breadcrumb = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumb">
          <a href="#" className="each-step">
            Home
          </a>
          <a href="#" className="each-step">
            Minha conta
          </a>
          <a className="each-step actual">
            Bolsas favoritas
          </a>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;