import React from 'react'
import ReactDOM from 'react-dom'
import Label from './Label'

test('render a without crashing', ()=>{
   const div = document.createElement('div')
   ReactDOM.render(<Label />, div)
})
