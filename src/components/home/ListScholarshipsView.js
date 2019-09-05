import React from 'react';
import AddScholarshipContainer from './AddScholarshipContainer';

const Score = ({ score }) => {
  let stars = [];

  for (let i = 1; i < 6; i++) {
    if (score >= 1.0) {
      stars.push({ status: "fill" })
    } else if (score > 0 && score < 1) {
      stars.push({ status: "half" })
    } else {
      stars.push({ status: "clear" })
    }

    score -= 1.0;
  }

  return (
    <>
      {stars.map((star, i) => {
        return (
          <div key={i}>
            <span className={`star ${star.status}`}>{star.status != "half" && <>★</>}</span>
          <div/>
        )
      })}
    </>
  );
}

const ListOfItems = (props) => {
  if (props.items && props.items.length) {
    return (
      <>
        {props.items.map((item, i) => {
          return (
            <div className="each-scholarship-on-list" key={i}>
              <div className="card">
                <img className="college-logo" src={item.university.logo_url} />
                <span className="college-name">{item.university.name}</span>
                <span className="course-name">{item.course.name}</span>
                <span className="college-score">
                  <span className="score">{item.university.score}</span> <Score score={item.university.score} />
                </span>

                <div className="course-info">
                  <span className="course-type-and-hour">{item.course.kind} - {item.course.shift}</span>
                  <span className="course-begin">Início das aulas em: {item.start_date}</span>
                </div>

                <div className="scholarship-info">
                  <span className="description">Mensalidade com o Quero Bolsa:</span>

                  <span className="old-price">R$ {item.full_price}</span>
                  <span className="new-price">
                    R$ {item.price_with_discount}
                    <span className="month">/mês</span>
                  </span>
                </div>

                <div className="actions">
                  <a className="btn sm outlined" href="#" onClick={e => props.removeScholarship(e, item)}>exluir</a>
                  <a className="btn sm contained yellow" href="#">Ver oferta</a>
                </div>
                {item.title}

              </div>
            </div>
          )
        })}
      </>
    );
  } else {
    return <></>;
  }
}


const HalfYearNav = (props) => {
  let options = [
    {
      text: 'Todos os semestres',
      value: 'ALL'
    },
    {
      text: '2º semestre de 2019',
      value: '2019.2'
    },
    {
      text: '1º semestre de 2020',
      value: '2020.1'
    },
  ];

  return (
    <>
     <div className="year-nav">
        <ul className="tab-list">
          {options.map((item, i) => {
            return (
              <li key={i}>
                <a onClick={e => props.handler(e, item.value)} href="#" className={props.yearOption == item.value ? "active" : ""}>
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}



const ListScholarshipsView = (props) => {
  let items = (props.yearOption == "ALL") ? props.items : props.itemsFiltered;
  return (
    <>
      <HalfYearNav yearOption={props.yearOption} handler={props.handleYearNav} />
      <AddScholarshipContainer toggleAddScolarship={props.toggleAddScolarship} />

      <ListOfItems items={items} removeScholarship={props.removeScholarship} />
    </>
  );

}

export default ListScholarshipsView;
