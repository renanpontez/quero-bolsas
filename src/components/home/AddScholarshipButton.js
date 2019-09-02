import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddScholarshipButton = props => {
  return (
    <>
      <a href="#" className="add-scorlaship" onClick={props.toggleAddScolarship}>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon="plus" size="2x"/>
          </div>
          <span className="title">Adicionar bolsa</span>
          <span className="description">Clique para adicionar bolsas de cursos do seu interesse</span>
        </div>
      </a>
    </>
  );
}
export default AddScholarshipButton;