import React from 'react'
import ReactDOM from 'react-dom'
import Label from './Label'

//Simple render
test('render a without crashing', ()=>{
   const div = document.createElement('div')
   ReactDOM.render(<Label text="Hello label"/>, div)
})

//Snapshot
test('render a label', ()=>{
    const wrapper = shallow(<Label text="Hello label"/>);
    expect(wrapper).toMatchSnapshot()
})

//Testing props
test('display text in label', ()=>{
    const wrapper = shallow(<Label text="Hello label" />);
    expect(wrapper.text()).toEqual('Hello label');   
})


test('display default text in label', ()=>{
    const wrapper = shallow(<Label />);
    expect(wrapper.text()).toEqual('Hello');   
})