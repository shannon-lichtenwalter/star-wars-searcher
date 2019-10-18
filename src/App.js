import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import ResultList from './ResultList/ResultList';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  state = {
    results: null,
    searchMade:false,
    error: null
  }

  handleSearchSubmit = (name) => {
    fetch(`https://swapi.co/api/people?search=${name}`)
    .then(res=> {
      if(!res.ok){
        throw new Error(res.json())
      } return res.json()
    }).then(data => {
      if(data.count === 0){
        this.setState({
          results:null,
          searchMade:true,
        })
      } else {
      this.setState({
        searchMade:true,
        results: data.results.map(result => {
        return {name: result.name}
        })
      })}
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
        <h1>Star Wars Searcher</h1>
        <h2>Use the search below to find your favorite characters</h2>
        {this.state.error && <h2>Sorry, an error has occurred: {this.state.error}</h2>}
        <ErrorBoundary>
          <SearchInput handleSearchSubmit= {this.handleSearchSubmit}/>
        </ErrorBoundary>
        <ErrorBoundary>
          {this.state.searchMade && <ResultList results={this.state.results}/>}
        </ErrorBoundary>
        
      </main>
    );
  }
}

export default App;
