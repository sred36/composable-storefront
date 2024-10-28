// MyNewRoute.js
import React from 'react'
import ErrorBoundary from './layout/ErrorBoundary'
import Product from './layout/Product'
// The parent component that handles the sub-routes
const MyNewRoute = () => {
    return (
        <div className="my-new-route">
            <ErrorBoundary>
                <Product />
            </ErrorBoundary>
        </div>
    )
}

export default MyNewRoute
