import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddScholarshipView = (props) => {
  return (
    <div id="AddScolarshipModal">
      <div className="modal">
        <div className="modal-content">
          <a href="#" className="close-button" onClick={props.toggleAddScolarship}>
            <FontAwesomeIcon icon="times" size="lg"/>
          </a>


          teste
        </div>
      </div>
    </div>
  )
}

export default AddScholarshipView;