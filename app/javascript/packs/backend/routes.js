/**
 * Created by watsy0007 on 16/07/2017.
 */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { App } from './containers'

const routes =
    <BrowserRouter>
        <Route path="/" component={App}>
        </Route>
    </BrowserRouter>
export default routes


