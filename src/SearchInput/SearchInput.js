import React from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  state = {
    nameSearch: null,
    touched: false,
    typeSearch:'people'
  }

updateNameSearch = (name) => {
  this.setState({
    nameSearch: name,
    touched: true,
  })
}

updateTypeSearch = (value) => {
  this.setState ({
    typeSearch: value
  })
}

validateName(){
  if(!this.state.nameSearch && this.state.touched) {
    return 'Search Field Cannot Be Blank'
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleSearchSubmit(this.state.typeSearch, this.state.nameSearch);
  event.target.searchName.value = ''
  this.setState({
    touched: false,
  })
}

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor='typeSearch'>You searching for what are?</label>
        <select id='typeSearch' onChange={(e)=> this.updateTypeSearch(e.target.value)}>
          <option value='people'>Character</option>
          <option value="films">Films</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <label htmlFor='searchName'>Hrrmmm. It called what is?</label>
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