import React from 'react';
import ListScholarshipsView from './ListScholarshipsView';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';

class ListScholarshipsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.removeScholarship = this.removeScholarship.bind(this);
  }

  removeScholarship(item) {
    let _self = this;
    _self.props.actions.removeScholarship(item).then((res) => {
      console.log("OK");
    });
  }

  render() {
    return (
      <>
        <ListScholarshipsView 
          items={this.props.items}
          removeScholarship={this.removeScholarship} />
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
)(ListScholarshipsContainer);

