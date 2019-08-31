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


        <div className="year-nav">
          <ul className="tab-list">
            <li>
              <a href="#" className="active">Todos os semestres</a>
              <a href="#">2º semestre de 2019</a>
              <a href="#">1º semestre de 2020</a>
            </li>
          </ul>
        </div>


        <a href="#" className="add-scorlaship" onClick={props.toggleAddScolarship}>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon="plus" size="2x"/>
            </div>
            <span className="title">Adicionar bolsa</span>
            <span className="description">Clique para adicionar bolsas de cursos do seu interesse</span>
          </div>
        </a>
        
        <ListScholarshipsContainer items={props.scholarshipsList} />
      </div>
    </>
  )
}

export default HomeView;