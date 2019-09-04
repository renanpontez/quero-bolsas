import React from 'react';

const Menu = () => {
  return (
    <>
      <div id="TopMenu">
        <div className="container">
          <a href="#">
            Minha conta
          </a>
          <a href="#">
            Pré-matrículas
          </a>
          <a href="#" className="active"> 
            Bolsas favoritas
          </a>
        </div>
      </div>  
    </>
  );
}

export default Menu;