import React from 'react';
import SearchInput from './SearchInput/SearchInput'

class App extends React.Component {
  state = {
    results: [],
    error: null
  }

  handleSearchSubmit = (name) => {
    fetch(`https://swapi.co/api/people?search=${name}`)
    .then(res=> {
      if(!res.ok){
        throw new Error(res.json())
      } return res.json()
    }).then(data => {
      this.setState({
        results: data.results.map(result => {
        return {name: result.name}
        })
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  }


  render() {
    return (
      <main className='App'>
        <div>Star Wars Project</div>
        <SearchInput handleSearchSubmit= {this.handleSearchSubmit}/>
      </main>
    );
  }
}

export default App;
