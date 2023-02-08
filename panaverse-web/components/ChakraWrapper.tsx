'use client'

// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react'
type Props = {
    children: ReactNode;
}

function ChakraWrapper({ children }: Props) {
  return (
    <ChakraProvider>
         { children }
    </ChakraProvider>
  )
}

export default ChakraWrapper