import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


test('Button should render ', ()=>{
   const div = document.createElement('div')
   ReactDOM.render(<Button />, div)
})

test('Button show right text', () => {
    const  wrapper = shallow(
        <Button value="button text" />
    )

    //Test initial value
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('button text'); 

    //Test button after click
    wrapper.find("button").simulate('click')
    expect(wrapper.text()).toEqual('other text'); 
   
})