// MyNewRoute.js
/* eslint-disable react/prop-types */
import React from 'react'
import loadable from '@loadable/component'
import {Skeleton} from '@salesforce/retail-react-app/app/components/shared/ui'

import {Switch, Route} from 'react-router-dom'
import HeaderOne from '../../components/header-one'
import Navigation from '../../components/navigation'
import Search from '../../components/search'

const fallback = <Skeleton height="75vh" width="100%" />
const Product = loadable(() => import('./partials/product'), {fallback})
const Men = loadable(() => import('../men'), {fallback})
const Women = loadable(() => import('../women'), {fallback})
const Kids = loadable(() => import('../kids'), {fallback})
const Ftw = loadable(() => import('../ftw'), {fallback})
const Accessories = loadable(() => import('../accessories'), {
    fallback
})

const MyNewRoute = () => {
    return (
        <div>
            <HeaderOne />
            <Navigation />
            <Search />
            <Switch>
                <Route exact path="/my-new-route" component={Product} />
                <Route path="/my-new-route/men" component={Men} />
                <Route path="/my-new-route/women" component={Women} />
                <Route path="/my-new-route/ftw" component={Ftw} />
                <Route path="/my-new-route/kids" component={Kids} />
                <Route path="/my-new-route/accessories" component={Accessories} />
            </Switch>
        </div>
    )
}

MyNewRoute.getTemplateName = () => 'my-product-detail'

export default MyNewRoute
