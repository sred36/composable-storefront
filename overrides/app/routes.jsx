/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import loadable from '@loadable/component'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'

// Components
import {Skeleton} from '@salesforce/retail-react-app/app/components/shared/ui'
import {configureRoutes} from '@salesforce/retail-react-app/app/utils/routes-utils'
import {routes as _routes} from '@salesforce/retail-react-app/app/routes'

const fallback = <Skeleton height="75vh" width="100%" />

// Create your pages here and add them to the routes array
// Use loadable to split code into smaller js chunks
const Home = loadable(() => import('./pages/home'), {fallback})
const MyNewRoute = loadable(() => import('./pages/my-new-route'), {fallback})
const Product = loadable(() => import('./pages/my-new-route/layout/Product'), {fallback})
const Men = loadable(() => import('./pages/my-new-route/layout/Men'), {fallback})
const Women = loadable(() => import('./pages/my-new-route/layout/Women'), {fallback})
const Kids = loadable(() => import('./pages/my-new-route/layout/Kids'), {fallback})
const Ftw = loadable(() => import('./pages/my-new-route/layout/Ftw'), {fallback})
const Accessories = loadable(() => import('./pages/my-new-route/layout/Accessories'), {fallback})

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/my-new-route',
        component: MyNewRoute
    },
    {path: '/MEN', component: Men},
    {path: '/WOMEN', component: Women}, // Nested route for Women
    {path: '/KIDS', component: Kids}, // Nested route for Kids
    {path: '/FTW', component: Ftw}, // Nested route for Footwear
    {path: '/ACCESSORIES', component: Accessories}, // Nest
    ..._routes
]

export default () => {
    const config = getConfig()
    return configureRoutes(routes, config, {
        ignoredRoutes: ['/callback', '*']
    })
}
