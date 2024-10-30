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
} from './product-icons'

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
import {Skeleton} from '@salesforce/retail-react-app/app/components/shared/ui'

const Fallback = <Skeleton height="75vh" width="100%" />

import {useGlobalState} from '../../../components/_app-config'

const ProductImage = () => {
    const {selectedProductState} = useGlobalState()
    const {image} = selectedProductState
    const IconComponent = iconMap[image]

    if (!IconComponent) {
        return Fallback
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
