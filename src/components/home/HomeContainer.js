import React from 'react';
import HomeView from './HomeView';
import AddScholarshipContainer from './AddScholarshipContainer';

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
          scholarshipsList={this.state.scholarshipsList} />

        { this.state.addScholarshipShowing && 
          <AddScholarshipContainer
            toggleAddScolarship={this.toggleAddScolarship} />
        }
      </>
    );
  }
}
export default HomeContainer;