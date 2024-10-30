/* eslint-disable react/prop-types */
import React from 'react'
import Swatches from './swatches'
import ProductDes from './product-description'
import ProductSeeMore from './product-see-more'
import {Box, Heading, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import {useGlobalState} from '../../../components/_app-config'

const ProductDetails = () => {
    // eslint-disable-next-line react/prop-types
    const {selectedProductState} = useGlobalState()
    let {title, price, availableSizes} = selectedProductState

    return (
        <Box className="product__details px-2" px="10px">
            <Heading as="h2" size="lg">
                {title}
            </Heading>
            <Text fontSize="18" color="gray.700" lineHeight="1.5">
                {price}
            </Text>

            <Text fontSize="18" color="gray.700" lineHeight="1.5">
                <Heading as="h5" size="18">
                    Available Sizes :
                </Heading>
                {availableSizes && availableSizes.join(' , ')}
            </Text>
            <Swatches />
            <ProductDes />
            <ProductSeeMore />
        </Box>
    )
}

export default ProductDetails
