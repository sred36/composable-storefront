/* eslint-disable react/prop-types */
import React from 'react'
import Swatches from './Swatches'
import ProductDes from './ProductDes'
import ProductSeeMore from './ProductSeeMore'
import {Box, Heading, Text} from '@salesforce/retail-react-app/app/components/shared/ui'

const ProductDetails = ({productImageProps, seletedItem, sendImageData}) => {
    // eslint-disable-next-line react/prop-types
    let {title, price, description, availableSizes} = productImageProps

    function sendImageDataMethod(id) {
        sendImageData(id)
    }
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
                {availableSizes.join(' , ')}
            </Text>
            <Swatches
                availableSizes={availableSizes}
                selectedSwath={seletedItem}
                onChildClick={sendImageDataMethod}
            />
            <ProductDes des={description} />
            <ProductSeeMore seeMoreArray={productImageProps} />
        </Box>
    )
}

export default ProductDetails
