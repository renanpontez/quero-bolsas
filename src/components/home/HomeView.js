import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListScholarshipsContainer from './ListScholarshipsContainer';



const HomeView = (props) => {
  return (
    <>
      <div className="container">
        <div className="page-info">
          <h1 className="title">Bolsas favoritas</h1>
          <p className="description">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
        </div>


        <ListScholarshipsContainer />
      </div>
    </>
  )
}

export default HomeView;