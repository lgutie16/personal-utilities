import React from 'react'
//import expect from 'expect'
//import { mount, shallow } from 'enzyme'
//import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import Menu from './Menu'

test('render a without crashing', ()=>{
   const div = document.createElement('div')
   ReactDOM.render(<Menu />, div)
})