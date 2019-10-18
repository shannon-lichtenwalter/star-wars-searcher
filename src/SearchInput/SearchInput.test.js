import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';
//import renderer from 'react-test-renderer';
//import { shallow } from 'enzyme'
//import toJson from 'enzyme-to-json'



describe('SearchInput Component', () => {
  
//   const testFunction = () => {
//   console.log('hi');
// }

  it('renders SearchInput without crashing', () =>  {
    const div= document.createElement('div');
    ReactDOM.render(<SearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // it('submits the form', () => {
  //   const wrapper = shallow(<SearchInput />)
  //   wrapper.find('form').simulate('onSubmit')
  //   expect(toJson(wrapper)).toMatchSnapshot()
  // })



})
