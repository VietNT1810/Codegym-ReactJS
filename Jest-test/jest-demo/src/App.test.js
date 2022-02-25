// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   //khoi chay component can test
//   render(<App />);

//   //tim 1 element co tren man hinh
//   const plusElement = screen.getByText("+");

//   //thu su kien
//   fireEvent.click(plusElement);

//   //tim kiem ket qua nen tra ve sau khi thuc hien su kien
//   const result = screen.getByText("1");

//   //kiem tra
//   expect(result).toBeInTheDocument();
// });


// DEMO
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

// Enzyme.configure({ adapter: new Adapter() })  //add vao setupTest.js

// describe('Test Case For App', () => {
//   it('should render button', () => {
//     const wrapper = shallow(<App />)
//     const buttonElement  = wrapper.find('#ClickMe');
//     expect(buttonElement).toHaveLength(1);
//     expect(buttonElement.text()).toEqual('Click Me');
//   })
// })

//Thuchanh 1
// import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import App from './App'

// describe('App component', () => {
//   it("Start with default value", () => {
//     const component = shallow(<App />);
//     const defaultValue = component.find('.default-value').text();
//     expect(defaultValue).toEqual('0');
//   })
// })

//Thuchanh 2

// describe('App component', () => {
//   it('increments count by 1 when the increment button is clicked', () => {
//     const component = shallow(<App />);
//     const incrementBtn = component.find('button.increment');
//     incrementBtn.simulate('click');
//     const text = component.find('div.counter-value').text();
//     expect(text).toEqual('Count: 1');
//   });
//   it('decrements count by 1 when the decrement button is clicked', () => {
//     const component = shallow(<App />);
//     const decrementBtn = component.find('button.decrement');
//     decrementBtn.simulate('click');
//     const text = component.find('div.counter-value').text();
//     expect(text).toEqual('Count: -1');
//   });
// })

//Thuchanh 3

describe('App component', () => {
  it('Should render without errors', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.app-pages');
    expect(wrapper.length).toBe(1);
  })
})