import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListScholarshipsView = (props) => {

  if(props.items && props.items.length) {
    return (
      <>
        {props.items.map((item, i) => {
          return (
            <div className="each-scholarship" key={i}>
              <div className="card">
                {item.title}

                <a href="#" onClick={() => props.removeScholarship(item)}>exluir</a>
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
