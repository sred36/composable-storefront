/* eslint-disable react/prop-types */
import React from 'react'
import {Flex, Text, Heading} from '@salesforce/retail-react-app/app/components/shared/ui'
import {Blue, GreenSmall, RedSmall, SkySmall} from '../layout/ProductIcons'

const swatchesData = [
    {component: Blue, id: 'blue'},
    {component: GreenSmall, id: 'green-small'},
    {component: RedSmall, id: 'red-small'},
    {component: SkySmall, id: 'sky-small'}
]

const Swatches = (props) => {
    let {selectedSwath} = props
    let isSelected = selectedSwath.swatchColor
    return (
        <div className="product__colors">
            <Text fontSize="18" color="gray.700" lineHeight="1.5" mt="5px">
                <Heading as="h5" size="18">
                    Colors:
                </Heading>
            </Text>
            <Flex align="center" gap={4}>
                {swatchesData.map(({component: SwatchIcon, id}, index) => (
                    <div
                        className={`swatch ${id}`}
                        key={`swatch-${index}`}
                        style={{
                            cursor: 'pointer',
                            padding: '5px',
                            border: isSelected === id ? '2px solid blue' : '1px solid transparent', // Highlight selected swatch
                            borderRadius: '4px',
                            transition: 'border-color 0.2s'
                            // You can add more styles here as needed
                        }}
                    >
                        <SwatchIcon
                            onClick={() => props.onChildClick(id)} // Pass the id or value you want to handle
                            // className={
                            //     props.productImage.img === `images/${index}.png` ? 'selected' : ''
                            // }
                        />
                    </div>
                ))}
            </Flex>
        </div>
    )
}

export default Swatches
