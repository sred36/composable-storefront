import React from 'react'
import {Box, Flex, Link, List, ListItem} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom' // Use RouterLink for routing

const NavigationList = ['MEN', 'WOMEN', 'KIDS', 'FTW', 'ACCESSORIES']

const Navigation = () => {
    return (
        <Box as="nav" className="product__navigation" p={4}>
            <Flex as={List} justify="space-between" fontSize="sm">
                {NavigationList.map((value, index) => (
                    <ListItem key={'navigation' + index}>
                        {/* Chakra's Link with react-router-dom's RouterLink */}
                        <Link as={RouterLink} to={`/${value}`} fontWeight="bold">
                            {value}
                        </Link>
                    </ListItem>
                ))}
            </Flex>
        </Box>
    )
}

export default Navigation
