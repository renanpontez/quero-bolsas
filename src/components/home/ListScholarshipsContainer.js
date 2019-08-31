import React from 'react';
import ListScholarshipsView from './ListScholarshipsView';

class ListScholarshipsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ListScholarshipsView items={this.props.items} />
      </>
    );
  }
}
export default ListScholarshipsContainer;