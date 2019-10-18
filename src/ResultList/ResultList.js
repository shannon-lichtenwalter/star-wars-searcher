import React from 'react';
import './ResultList.css';

class ResultList extends React.Component {

  render() {
    if (this.props.results === null) {
      return (
        <p className='noResult'>Sorry, No Results Found.</p>
      )
    } else {
      return (
        <ul>
          {this.props.results.map((person, i) => {
            return <li key={i}>{person.name}</li>
          })}
        </ul>
      )
    }
  }
}

export default ResultList;