import React from 'react'
import {Box, Text, Heading} from '@salesforce/retail-react-app/app/components/shared/ui'
import {useGlobalState} from '../../../components/_app-config'

// eslint-disable-next-line react/prop-types
const ProductDes = () => {
    const {selectedProductState} = useGlobalState()
    let {description} = selectedProductState
    return (
        <Box fontSize="18" color="gray.700" mt="10px">
            <Heading as="h5" size="18">
                Description
            </Heading>
            <Text fontSize="16">{description}</Text>
            <Text fontSize="16">
                <div className="fonts-size--xx-small line-height--normal">shirt sleev</div>
                <div className="fonts-size--xx-small line-height--normal">
                    Tiger emborided sleev
                </div>
                <div className="fonts-size--xx-small line-height--normal">round neeck</div>
            </Text>
        </Box>
    )
}

export default ProductDes
