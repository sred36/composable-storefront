import React from 'react'

import {Zero, One, Two, Three, Four, Five, Six} from '../my-product-detail/partials/product-icons'
import {Text, AspectRatio} from '@salesforce/retail-react-app/app/components/shared/ui'

const ProductTileData = [
    {url: <Zero />, price: '$200'},
    {url: <One />, price: '$300'},
    {url: <Two />, price: '$400'},
    {url: <Three />, price: '$600'},
    {url: <Four />, price: '$700'},
    {url: <Five />, price: '$800'},
    {url: <Six />, price: '$800'}
]

const Kids = () => {
    return (
        <div className="product__tile text-align--center">
            {ProductTileData.map((value, index) => (
                <div className={'product__tile' + index} key={'product__tile' + index}>
                    <AspectRatio
                        width="100%"
                        ratio={1}
                        key={index}
                        height="250px"
                        alignItems="center"
                    >
                        {value.url}
                    </AspectRatio>
                    <Text textAlign="center" mb="10px">
                        {value.price}
                    </Text>
                </div>
            ))}
        </div>
    )
}
Kids.getTemplateName = () => 'kids'

export default Kids
