import React from 'react';
import AddScholarshipView from './AddScholarshipView';
import AddScholarshipButton from './AddScholarshipButton';
import { getScholarships } from '../../Api/coursesApi';
import objectAssign from 'object-assign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';
import { hash } from '../../helpers/hash';
import { 
  FILTER_CITY, 
  FILTER_CITY_ALL, 
  FILTER_COURSE, 
  FILTER_COURSE_ALL, 
  FILTER_TYPE, 
  FILTER_TYPE_ALL, 
  FILTER_MAX_PRICE, 
  FILTER_MAX_PRICE_ALL, 
  PRESENTIAL,
  DISTANCE
} from '../../constants/Utils';

class AddScholarshipContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addScholarshipShowing: false,
      scholarships: [],
      filtering: false,
      scholarshipsFiltered: [],
      scholarshipsChosen: [],
      recentlyAdded: false,
      cities: [],
      courses: [],
      rangeOfPrice: {
        min: 0,
        max: 0,
        value: 0
      },
      typeOfCourse: {
        presential: true,
        distance: true
      },
      filterOptions: []
    }

    this.selectScholarship = this.selectScholarship.bind(this);
    this.addSelectedScholarships = this.addSelectedScholarships.bind(this);
    this.toggleAddScolarship = this.toggleAddScolarship.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilterTypeOfCourse = this.handleFilterTypeOfCourse.bind(this);
  }

  componentDidMount() {
    this.updateScholarships();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scholarships.length != prevProps.scholarships.length || (!this.state.addScholarshipShowing && this.state.addScholarshipShowing != prevState.addScholarshipShowing)) {
      this.updateScholarships();
    }
  }

  updateScholarships() {
    let _self = this;

    getScholarships(_self.props.scholarships).then(res => {
      if (res) {
        _self.setState({
          scholarships: res.scholarships,
          cities: res.cities,
          courses: res.courses,
          rangeOfPrice: {
            min: res.minPrice,
            max: res.maxPrice,
            value: res.maxPrice
          }
        });
      }
    });
  }

  selectScholarship(e, item) {
    let checked = e.target.checked;
    let newState = [...this.state.scholarshipsChosen];

    if (checked) {
      newState.push(objectAssign({}, item, { id: hash(item) }));
    } else {
      newState = newState.filter((eachScholarship) => {
        return (eachScholarship.id != hash(item)) ? eachScholarship : null;
      });
    }

    return this.setState({ scholarshipsChosen: newState });
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
      scholarshipsChosen: [],
      filterOptions: [],
      typeOfCourse: {
        presential: true,
        distance: true
      },
    });
  }

  handleFilterChange(e) {
    let _self = this;
    let filterOptions = [...this.state.filterOptions];
    let rangeOfPrice =  this.state.rangeOfPrice;
    let target = {
      id: e.target.id,
      value: e.target.value
    }


    if (target.value == FILTER_CITY_ALL || target.value == FILTER_COURSE_ALL) {
      filterOptions = filterOptions.filter(x => x.type != target.id);
    }
    else {
      if(target.id == FILTER_MAX_PRICE) {
        rangeOfPrice = objectAssign({}, rangeOfPrice, { value: target.value });
        target.value = parseFloat(target.value);
      } 

      if(filterOptions.find(x => x.type == target.id)) {
        filterOptions = filterOptions.filter((eachFilter) => {
          if(eachFilter.type ==  target.id) {
            eachFilter.value = target.value;
          } 

          return eachFilter;
        });
     }
     else {
       filterOptions.push({
        type: target.id, 
        value: target.value
      });
     }
    }

    getScholarships(_self.props.scholarships, filterOptions).then(res => {
      _self.setState({
        scholarships: res.scholarships,
        filterOptions: filterOptions,
        scholarshipsChosen: [],
        rangeOfPrice: rangeOfPrice
      })
    });

  }

  handleFilterTypeOfCourse(e) {
    let _self = this;
    let newState = objectAssign({}, this.state.typeOfCourse);

    if(e.target.name == PRESENTIAL) {
      newState.presential = e.target.checked;
    } else {
      newState.distance = e.target.checked;
    }

    let filterTypeOption = { type: FILTER_TYPE, value: null };
    
    if(newState.presential) filterTypeOption.value = PRESENTIAL;
    if(newState.distance) filterTypeOption.value = DISTANCE;

    let filterOptions = [...this.state.filterOptions];

    if(filterTypeOption.value == null || (newState.presential && newState.distance)) {
      filterOptions = filterOptions.filter(x => x.type != FILTER_TYPE);
    } else {
      filterOptions.push(filterTypeOption);
    }

    getScholarships(_self.props.scholarships, filterOptions).then(res => {
      _self.setState({
        scholarships: res.scholarships,
        filterOptions: filterOptions,
        typeOfCourse: newState,
        scholarshipsChosen: []
      })
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
            filtering={this.state.filtering}
            listOfScolarshipsFiltered={this.state.scholarshipsFiltered}
            selectScholarship={this.selectScholarship}
            addSelectedScholarships={this.addSelectedScholarships}
            filterCities={this.state.cities}
            filterCourses={this.state.courses}
            typeOfCourse={this.state.typeOfCourse}
            handleFilterChange={this.handleFilterChange}
            filterOptions={this.state.filterOptions}
            handleFilterTypeOfCourse={this.handleFilterTypeOfCourse}
            scholarshipsChosen={this.state.scholarshipsChosen}
            rangeOfPrice={this.state.rangeOfPrice} />
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
