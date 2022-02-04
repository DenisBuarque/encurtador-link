import React from 'react'
import { BrowserRouter, Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Links from './pages/Links'

function RoutesApp(){
    return (
        <BrowserRouter>
            <Router>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/links" element={<Links />} />
            </Router>
        </BrowserRouter>
    )
}

export default RoutesApp;