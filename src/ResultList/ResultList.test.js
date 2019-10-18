import React from 'react';
import ReactDOM from 'react-dom';
import ResultList from './ResultList';


it('Renders result list without crashing', () => {
  const div=document.createElement('div')
  ReactDOM.render(<ResultList results={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
})