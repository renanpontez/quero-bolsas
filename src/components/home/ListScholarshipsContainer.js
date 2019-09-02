import React from 'react';
import ListScholarshipsView from './ListScholarshipsView';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';
import objectAssign from 'object-assign';
import { hash } from '../../helpers/hash';
import AddScholarshipContainer from './AddScholarshipContainer';

class ListScholarshipsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.removeScholarship = this.removeScholarship.bind(this);
  }

  removeScholarship(item) {
    let _self = this;
    item = objectAssign({}, item, { id: hash(item) });

    _self.props.actions.removeScholarship(item).then((res) => {
      console.log("OK");
    });
  }

  render() {
    return (
      <>
        <AddScholarshipContainer toggleAddScolarship={this.toggleAddScolarship} />

        <ListScholarshipsView 
          items={this.props.scholarships}
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

