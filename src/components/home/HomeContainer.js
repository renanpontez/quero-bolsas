import React from 'react';
import HomeView from './HomeView';
import AddScholarshipContainer from './AddScholarshipContainer';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <>
        <HomeView />
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
