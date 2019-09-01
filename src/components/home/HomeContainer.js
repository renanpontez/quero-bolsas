import React from 'react';
import HomeView from './HomeView';
import AddScholarshipContainer from './AddScholarshipContainer';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addScholarshipShowing: false,
      scholarshipsList: [
        {
          id: 1,
          title: "teste"
        }
      ]
    }

    this.toggleAddScolarship = this.toggleAddScolarship.bind(this);
  }

  toggleAddScolarship() {
    this.setState({ addScholarshipShowing: !this.state.addScholarshipShowing });
  }

  render() {
    return (
      <>
        <HomeView
          toggleAddScolarship={this.toggleAddScolarship}
          scholarshipsList={this.props.scholarships} />

        { this.state.addScholarshipShowing && 
          <AddScholarshipContainer
            toggleAddScolarship={this.toggleAddScolarship} />
        }
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    scholarships: state.scholarships,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
