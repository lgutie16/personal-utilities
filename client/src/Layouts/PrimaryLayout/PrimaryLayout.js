import React from 'react'
import { Route } from 'react-router-dom'
import { Menu } from '../../Components'

const example = () => <div>example</div>

const PrimaryLayout = props => {
   console.log(props)
   return <div>
        <header>
            Router V4
        </header>
        <main>
            <Route path='/' exact component={Menu} />
            <Route path='/example' component={Menu} />
        </main>
    </div>
}
    

export default PrimaryLayout