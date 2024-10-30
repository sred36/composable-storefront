import React from 'react'
import {
    InputGroup,
    Input,
    InputRightElement,
    Icon
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {FaSearch} from 'react-icons/fa' // Font Awesome search icon

const Search = () => {
    return (
        <InputGroup className="product__search" maxW="95%" mx="auto" mt="4" mb="3">
            {/* Nested the icon directly between the tags */}
            <InputRightElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
            </InputRightElement>
            <Input
                type="search"
                placeholder="SEARCH"
                name="search"
                variant="outline" // Can be "outline", "filled", etc.
                _placeholder={{color: 'gray.400'}} // Placeholder color
                className="product__search--control"
            />
        </InputGroup>
    )
}

export default Search
