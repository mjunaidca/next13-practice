'use client'

import { ChakraProvider } from "@chakra-ui/react"


interface Props {
    children: React.ReactNode
}

const Wrapper=({children}:Props)=>{
    return(
        <ChakraProvider >
            {children}
            </ChakraProvider>
    )

}

export default Wrapper;