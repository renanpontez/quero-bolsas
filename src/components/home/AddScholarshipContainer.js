import React from 'react';
import AddScholarshipView from './AddScholarshipView';
import { getScholarships } from '../../Api/coursesApi';
import objectAssign from 'object-assign';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';

class AddScholarshipContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfScolarships: [],
      scholarshipsChosen: [],
      recentlyAdded: false,
    }

    this.selectScholarship = this.selectScholarship.bind(this);
    this.addSelectedScholarships = this.addSelectedScholarships.bind(this);
  }

  componentDidMount() {
    let _self = this;

    getScholarships().then(res => {
      if(res) {
        return _self.setState({ listOfScolarships: res });
      }
    });
  } 

  selectScholarship(e, item) {
    let checked = e.target.checked;
    let newState = [...this.state.scholarshipsChosen];

    if(checked) {
      newState.push(item);
    } else {
      newState = newState.filter((eachScholarship) => {
        return (eachScholarship.full_price != item.full_price) ? eachScholarship : null;
      });
    }

    return this.setState({scholarshipsChosen: newState});
  }

  addSelectedScholarships() {
    let _self = this;

    _self.props.actions.addScholarship(this.state.scholarshipsChosen).then((res) => {
      return _self.props.toggleAddScolarship();
    });
  }

  render() {
    return (
      <>
        <AddScholarshipView
          toggleAddScolarship={this.props.toggleAddScolarship}
          listOfScolarships={this.state.listOfScolarships}
          selectScholarship={this.selectScholarship}
          addSelectedScholarships={this.addSelectedScholarships} />
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
)(AddScholarshipContainer);
