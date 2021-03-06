import React from 'react';
import ListScholarshipsView from './ListScholarshipsView';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/scholarshipAction';
import objectAssign from 'object-assign';
import { hash } from '../../helpers/hash';

class ListScholarshipsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yearOption: "ALL",
      itemsFiltered: []
    }

    this.handleYearNav = this.handleYearNav.bind(this);
    this.removeScholarship = this.removeScholarship.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.scholarships.length != this.props.scholarships.length) {
      this.handleYearNav(null, this.state.yearOption);
    }
  }

  handleYearNav(e, option) {
    if(e) e.preventDefault();
    let items = [];

    if(option != "ALL") {
      items = this.props.scholarships.filter(x => x.enrollment_semester == option);
    }

    this.setState({ 
      yearOption: option,
      itemsFiltered: items
    });
  }

  removeScholarship(e, item) {
    e.preventDefault();
    
    let _self = this;
    item = objectAssign({}, item, { id: hash(item) });

    _self.props.actions.removeScholarship(item).then((res) => {
      console.log("OK");
    });
  }

  render() {
    return (
      <>
        <ListScholarshipsView 
          items={this.props.scholarships}
          itemsFiltered={this.state.itemsFiltered}
          removeScholarship={this.removeScholarship}
          yearOption={this.state.yearOption}
          handleYearNav={this.handleYearNav}
          toggleAddScolarship={this.toggleAddScolarship} />
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

