/* eslint-disable react/prop-types */
import React from 'react'

import {AspectRatio} from '@salesforce/retail-react-app/app/components/shared/ui'

import {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Blue,
    BlueOne,
    BlueThree,
    GreenSmall,
    RedSmall,
    SkySmall
} from '../layout/ProductIcons'

const iconMap = {
    Zero: Zero,
    One: One,
    Two: Two,
    Three: Three,
    Four: Four,
    Five: Five,
    Six: Six,
    Blue: Blue,
    BlueOne: BlueOne,
    BlueThree: BlueThree,
    GreenSmall: GreenSmall,
    RedSmall: RedSmall,
    SkySmall: SkySmall
}

const ProductImage = ({productImageProps}) => {
    const {title, image} = productImageProps
    const IconComponent = iconMap[image]

    if (!IconComponent) {
        return <div>Icon not found</div>
    }

    return (
        <div className="product__image">
            <AspectRatio maxW="100%" ratio={1}>
                <IconComponent />
            </AspectRatio>
        </div>
    )
}

export default ProductImage
