import React from 'react';
import AddScholarshipView from './AddScholarshipView';

class AddScholarshipContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <AddScholarshipView
          toggleAddScolarship={this.props.toggleAddScolarship} />
      </>
    );
  }
}
export default AddScholarshipContainer;