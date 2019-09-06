import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopBar = () => {
  return (
    <>
      <div id="TopBar">
        <div className="container">
          <a href="#" className="how-works">
            <FontAwesomeIcon icon="info-circle" size="2x"/> Como funciona
          </a>
          
          <div className="divisor"></div>

          <a href="#" className="talk-to-us">
            <div className="whatsapp-icon">
              <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x"/>
            </div>
            <span className="number">
              0800 123 2222
            </span>
            <span className="phrase">
              Envie mensagem ou ligue
            </span>
          </a>

          <img className="logo" src="/assets/logo.png" />

          <div style={{clear: "both"}}/>

        </div>

      </div>
    </>
  );
}

export default TopBar;