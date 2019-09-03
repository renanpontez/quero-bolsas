import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../_common/Loading';
import { FILTER_CITY, FILTER_CITY_ALL, FILTER_COURSE, FILTER_COURSE_ALL, PRESENTIAL, DISTANCE, FILTER_MAX_PRICE } from '../../constants/Utils';
import { hash } from '../../helpers/hash';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


const Scholarships = ({items, filtering, selectScholarship, scholarshipsChosen}) => {
  if(items.length) {
    return (
      <ul className="scholarship-list">
        {items.map((item, i) => {
          let checkStatus = Boolean(scholarshipsChosen.find(x => x.id == hash(item)));


          return (
            <li className="each-scholarship" key={i}>
              <div className="each-info check">
                {item.enabled ? (
                  <input type="checkbox" value={checkStatus} checked={checkStatus} onChange={(e) => selectScholarship(e, item)} />
                ) : (
                  <input disabled="disabled" type="checkbox" />
                )}
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
                  R$ {item.price_with_discount}/mês
                </span>
              </div>
            </li>
          )    
        })}

      <div style={{clear: "both"}} />
      </ul>
    )
  } 
  else if(filtering) {
    return <div className="no-result">Nenhum resultado para o filtro escolhido</div>
  }
  else {
    return <Loading />
  }
}

const AddScholarshipView = (props) => {
  const [price, setPrice] = useState(props.rangeOfPrice.value);


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
                <select id={FILTER_CITY} onChange={props.handleFilterChange}>
                  <option value={FILTER_CITY_ALL}>
                    Todas as cidades
                  </option>
                  {props.filterCities.map((item, i) => {
                    return (
                      <option key={i}>
                        {item}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="each-filter course">
                <label className="filter-title">
                  SELECIONE O CURSO DE SUA PREFERÊNCIA
                </label>
                <select id={FILTER_COURSE} onChange={props.handleFilterChange} >
                  <option value={FILTER_CITY_ALL}>
                    Todas os cursos
                  </option>
                  {props.filterCourses.map((item, i) => {
                    return (
                      <option key={i}>
                        {item}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="each-filter type">
                <label className="filter-title">
                  COMO VOCÊ QUER ESTUDAR?
                </label>

                <div className="input-group">
                  <input name={PRESENTIAL} type="checkbox" checked={props.typeOfCourse.presential}  onChange={props.handleFilterTypeOfCourse}/>
                  <label>Presencial</label>

                </div>
                <div className="input-group">
                  <input name={DISTANCE} type="checkbox" checked={props.typeOfCourse.distance} onChange={props.handleFilterTypeOfCourse}/>
                  <label>A distância</label>
                </div>
              </div>
              <div className="each-filter price">
                <label className="filter-title">
                  ATÉ QUANTO PODE PAGAR?
                </label>
                <p className="filter-price">R$ {props.rangeOfPrice.value.toFixed(2)}</p>

                <InputRange
                  value={price}
                  minValue={props.rangeOfPrice.min} 
                  maxValue={props.rangeOfPrice.max} 
                  formatLabel={value => ``}
                  onChange={value => setPrice(value)}
                  onChangeComplete={value => props.handleFilterChange({ target: { id: FILTER_MAX_PRICE, value: value } })} />
{/* 
                <input 
                  id={FILTER_MAX_PRICE}
                  type="range" 
                  min={props.rangeOfPrice.min} 
                  max={props.rangeOfPrice.max} 
                  step="100"
                  value={props.rangeOfPrice.value}
                  onChange={props.handleFilterChange} /> */}
              </div>
            </div>
            <div style={{clear: "both"}} />
          
            <div className="main-content">
              <Scholarships 
                filtering={props.filterOptions.length > 0}
                items={props.listOfScolarships}
                selectScholarship={props.selectScholarship}
                scholarshipsChosen={props.scholarshipsChosen} />
            </div>
          </div>

          <div style={{clear: "both"}} />

          <div className="modal-action">
            <a className="btn outline" href="#" onClick={props.toggleAddScolarship}>Cancelar</a>
            {props.scholarshipsChosen.length > 0 ? (
              <a className="btn contained" href="#" onClick={props.addSelectedScholarships}>Adicionar bolsa(s)</a>
            ) : 
            (
              <a className="btn contained disabled" href="#">Adicionar bolsa(s)</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddScholarshipView;