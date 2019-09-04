import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = () => {
  const [menuShowing, setMenu] = React.useState(false);

  return (
    <>
      <div id="TopMenu" className={menuShowing ? "show" : "hide"}>
        <a className="collapse-menu" onClick={() => setMenu(!menuShowing)}>
          <FontAwesomeIcon icon={"chevron-down"} size="1x"/>
        </a>

        <div className="container">
          <div className="links-list">
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
      </div>  
    </>
  );
}

export default Menu;