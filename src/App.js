import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import ResultList from './ResultList/ResultList';
import ErrorBoundary from './ErrorBoundary';
import Spinner from './Spinner/Spinner';

class App extends React.Component {
  state = {
    results: null,
    searchMade:false,
    error: null,
    fetchInProgress:false
  }


  handleSearchSubmit = (type, search) => {
    this.setState({
      fetchInProgress:true,
    })
    fetch(`https://swapi.co/api/${type}?search=${search}`)
    .then(res=> {
      this.setState({
        fetchInProgress:false,
      });
      if(!res.ok){ 
        throw new Error(res.json());
      }
        return res.json()
    })
    .then(data => {
      if(data.count === 0){
        this.setState({
          results:null,
          searchMade:true,
        })
      } else {
      this.setState({
        searchMade:true,
        results: data.results.map(result => {
        return {name: result.name ? result.name : result.title}
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
        <h2>Power! Unlimited power!</h2>
        <img src="https://i.imgur.com/J9qafQC.png" alt="yoda" />
        {this.state.error && <h2>Sorry, an error has occurred: {this.state.error}</h2>}
        <ErrorBoundary>
          <SearchInput handleSearchSubmit= {this.handleSearchSubmit}/>
        </ErrorBoundary>
        {this.state.fetchInProgress && <Spinner />}
        <ErrorBoundary>
          {this.state.searchMade && <ResultList results={this.state.results}/>}
        </ErrorBoundary>
        
      </main>
    );
  }
}

export default App;
