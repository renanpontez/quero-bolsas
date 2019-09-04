import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Score = ({score}) => {
  let stars = [];
  
  for(let i = 1; i < 6; i++) {
    if(score >= 1.0) {
      stars.push({ status: "fill" })
    } else if(score == 0.5) {
      stars.push({ status: "half" })
    } else {
      stars.push({ status: "clear" })
    }
    
    score -= 1.0;
  }

  return (
    <>
      { stars.map((star) => {
        return (
          <>
            <span className={`star ${star.status}`}>{star.status != "half" && <>★</>}</span>
          </>
        )
      })}
    </>
  );
}

const ListScholarshipsView = (props) => {

  if(props.items && props.items.length) {
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
                  <a className="btn sm outlined" href="#" onClick={() => props.removeScholarship(item)}>exluir</a>
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

export default ListScholarshipsView;
