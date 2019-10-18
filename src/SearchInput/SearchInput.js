import React from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  state = {
    nameSearch: null,
    touched: false,
  }

updateNameSearch = (name) => {
  this.setState({
    nameSearch: name,
    touched: true,
  })
}

validateName(){
  if(!this.state.nameSearch && this.state.touched) {
    return 'Search Field Cannot Be Blank'
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log('here!');
  this.props.handleSearchSubmit(this.state.nameSearch);
  event.target.searchName.value = ''
  this.setState({
    touched: false,
  })
}

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor='searchName'>Search By Name:</label>
        <input 
          id='searchName' 
          type='text' 
          onChange={(e)=> this.updateNameSearch(e.target.value)}
          defaultValue= {this.state.nameSearch} 
          required>
        </input>
        <p className='validationError'>{this.validateName()}</p>
        <button type="submit" disabled= {this.validateName() || !this.state.touched}>
          Search The Galaxy Now
        </button>
      </form>

    )
  }

}

SearchInput.propTypes = {
  handleSearchSubmit: PropTypes.func
}

export default SearchInput;