import React from 'react';
import AddScholarshipView from './AddScholarshipView';
import AddScholarshipButton from './AddScholarshipButton';
import { getScholarships } from '../../Api/coursesApi';
import objectAssign from 'object-assign';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';
import { hash } from '../../helpers/hash';

class AddScholarshipContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addScholarshipShowing: false,
      scholarships: [],
      scholarshipsChosen: [],
      recentlyAdded: false,
      cities: [],
      courses: [],
      typeOfCourse: {
        presential: true,
        distance: true
      }
    }
    
    this.selectScholarship = this.selectScholarship.bind(this);
    this.addSelectedScholarships = this.addSelectedScholarships.bind(this);
    this.toggleAddScolarship = this.toggleAddScolarship.bind(this);
  }

  componentDidMount() {
    this.updateScholarships();
  } 

  componentDidUpdate(prevProps) {
    if(this.props.scholarships.length != prevProps.scholarships.length) {
      this.updateScholarships();
    }
  }

  updateScholarships() {
    let _self = this;

    getScholarships(_self.props.scholarships).then(res => {
      if(res) {
        _self.setState({
          scholarships: res.scholarships,
          cities: res.cities,
          courses: res.courses
        });
      }
    });
  }

  selectScholarship(e, item) {
    let checked = e.target.checked;
    let newState = [...this.state.scholarshipsChosen];

    if(checked) {
      newState.push(objectAssign({}, item, { id: hash(item) }));
    } else {
      newState = newState.filter((eachScholarship) => {
        return (eachScholarship.id != hash(item)) ? eachScholarship : null;
      });
    }

    return this.setState({scholarshipsChosen: newState});
  }

  addSelectedScholarships() {
    let _self = this;

    _self.props.actions.addScholarship(this.state.scholarshipsChosen).then((res) => {
      _self.toggleAddScolarship();
    });
  }

  toggleAddScolarship() {
    this.setState({ 
      addScholarshipShowing: !this.state.addScholarshipShowing,
      scholarshipsChosen: []
    });
  }

  render() {
    return (
      <>
        <AddScholarshipButton toggleAddScolarship={this.toggleAddScolarship} />

        {this.state.addScholarshipShowing && 
          <AddScholarshipView
            toggleAddScolarship={this.toggleAddScolarship}
            listOfScolarships={this.state.scholarships}
            selectScholarship={this.selectScholarship}
            addSelectedScholarships={this.addSelectedScholarships}
            filterCities={this.state.cities}
            filterCourses={this.state.courses}
            typeOfCourse={this.state.typeOfCourse} />
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
)(AddScholarshipContainer);
