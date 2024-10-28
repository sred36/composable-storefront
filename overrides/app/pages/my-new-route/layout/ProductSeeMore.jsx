/* eslint-disable react/prop-types */
import React from 'react'
import {One, Two, Three, Four, Five} from '../layout/ProductIcons'
import {
    Flex,
    AspectRatio,
    Heading,
    Box
} from '@salesforce/retail-react-app/app/components/shared/ui'

const iconMap = {
    One: One,
    Two: Two,
    Three: Three,
    Four: Four,
    Five: Five
}

export const SeeMoreImage = ({source}) => {
    const IconComponent = iconMap[source]

    if (!IconComponent) {
        return <div>Icon not found</div>
    }
    return <IconComponent />
}

const ProductSeeMore = ({seeMoreArray}) => {
    const {seeMore} = seeMoreArray
    console.log('seeMore', seeMore)
    return (
        <Box className="product__seemore" mb="20px">
            <Heading as="h5" size="20" my="10px">
                SEE MORE PRODUCTS
            </Heading>

            <Flex justify="space-between" align="center" gap={4}>
                {seeMore &&
                    seeMore.map((value, index) => (
                        <AspectRatio
                            width="100%"
                            ratio={1}
                            key={index}
                            height="150px"
                            alignItems="center"
                        >
                            <SeeMoreImage source={value} />
                        </AspectRatio>
                    ))}
            </Flex>
        </Box>
    )
}

export default ProductSeeMore
