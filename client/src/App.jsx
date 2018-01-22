import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import { PrimaryLayout } from './Layouts'

const App = () => {
        return (
            <BrowserRouter>
                <PrimaryLayout />
            </BrowserRouter>
        )
}

export default App