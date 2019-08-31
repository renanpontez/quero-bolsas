import React from 'react';
import AddScholarshipView from './AddScholarshipView';
import { getScholarships } from '../../Api/coursesApi';


class AddScholarshipContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfScolarships: null
    }
  }

  componentDidMount() {
    let _self = this;

    getScholarships().then(res => {
      if(res) {
        return _self.setState({ listOfScolarships: res });
      }
    });

  }

  render() {

    return (
      <>
        <AddScholarshipView
          toggleAddScolarship={this.props.toggleAddScolarship}
          listOfScolarships={this.state.listOfScolarships} />
      </>
    );
  }
}
export default AddScholarshipContainer;