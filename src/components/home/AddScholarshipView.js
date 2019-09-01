import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../_common/Loading';

const Scholarships = ({items, selectScholarship}) => {
  if(items) {
    return (
      <ul className="scholarship-list">
        {items.map((item, i) => {
          return (
            <li className="each-scholarship" key={i}>
              <div className="each-info check">
                <input type="checkbox" onClick={(e) => selectScholarship(e, item)} />
              </div>
              <div className="each-info logo">
                <img src={item.university.logo_url} />
              </div>
              <div className="each-info course">
                <span className="title">
                  {item.course.name}
                </span>
                <span className="level">
                  {item.course.level}
                </span>
              </div>
              <div className="each-info price">
                <span className="discount">
                  Bolsa de <span className="value">{item.discount_percentage}%</span>
                </span>
                <span className="monthly">
                  R$ {item.full_price}/mês
                </span>
              </div>
            </li>
          )    
        })}

      <div style={{clear: "both"}} />
      </ul>
    )
  } 
  else {
    return <Loading />
  }
}

const AddScholarshipView = (props) => {
  return (
    <div id="AddScolarshipModal">
      <div className="modal">
        <div className="modal-content">
          <a href="#" className="close-button" onClick={props.toggleAddScolarship}>
            <FontAwesomeIcon icon="times" size="lg"/>
          </a>
          <div>
            <h3 className="modal-title">
              Adicionar bolsa
            </h3>
            <p className="modal-description">
              Filtre e adicione as bolsas de seu interesse.
            </p>

            <div className="filters">
              <div className="each-filter city">
                <label className="filter-title">
                  SELECIONE SUA CIDADE
                </label>
                <select>
                  <option>
                    Teste
                  </option>
                </select>
              </div>
              <div className="each-filter course">
                <label className="filter-title">
                  SELECIONE O CURSO DE SUA PREFERÊNCIA
                </label>
                <select>
                  <option>
                    Teste
                  </option>
                </select>
              </div>
              <div className="each-filter type">
                <label className="filter-title">
                  COMO VOCÊ QUER ESTUDAR?
                </label>

                <div className="input-group">
                  <input type="checkbox"/>
                  <label>Presencial</label>

                </div>
                <div className="input-group">
                  <input type="checkbox" />
                  <label>A distância</label>
                </div>
              </div>
              <div className="each-filter price">
                <label className="filter-title">
                  ATÉ QUANTO PODE PAGAR?
                </label>
                SLIDER
              </div>
            </div>
            <div style={{clear: "both"}} />
          
            <div className="main-content">
              <Scholarships 
                items={props.listOfScolarships}
                selectScholarship={props.selectScholarship} />
            </div>
          </div>

          <div style={{clear: "both"}} />

          <div className="modal-action">
            <a className="btn outline" href="#">Cancelar</a>
            <a className="btn contained" href="#" onClick={props.addSelectedScholarships}>Adicionar bolsa(s)</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddScholarshipView;