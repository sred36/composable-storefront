import React from 'react'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

const Ftw = () => {
    return (
        <div>
            <Box className="text-align--center" p="10px">
                Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of de Finibus Where does it come from? Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                through the cites of the word in classical literature, discovered the undoubtable
                source. Lorem Ipsum comes from sections 1.10.32 and 1.1
            </Box>
        </div>
    )
}

Ftw.getTemplateName = () => 'ftw'
export default Ftw
