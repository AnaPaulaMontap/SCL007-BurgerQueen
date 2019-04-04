import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Steward from './Steward';
import menu from'./burguerQueen.json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Input debe retornar AnaPaula', () => {
  const stewardComponent = Enzyme.mount(<Steward menu={menu} />);
  const nameFormComponent = stewardComponent.find('NameForm').find('input');
  nameFormComponent.simulate('change', { target: {value: 'AnaPaula'} });
  expect(stewardComponent.state().takeOrder.nameClient).toEqual('AnaPaula');
  
})