import React from 'react'

import {Flex, Link} from '@salesforce/retail-react-app/app/components/shared/ui'

const Header = () => {
    return (
        <>
            <Flex justify="center" align="center" height="100px">
                <Link
                    href="https://www.google.co.in/"
                    fontWeight="extrabold"
                    fontSize="4xl" // Adjust font size
                    textAlign="center"
                >
                    LOGO
                </Link>
            </Flex>
        </>
    )
}

export default Header
