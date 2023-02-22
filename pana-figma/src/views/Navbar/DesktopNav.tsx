'use client'
import NextLink from "next/link";
import { NAV_ITEMS } from "@/utlis/constants";
import { Stack, Box, Link } from "@chakra-ui/react";

const DesktopNav=()=> {
  return (
    <Stack direction={'row'} spacing='36'>
        {NAV_ITEMS.map((nav)=>(
            <Box key={nav.label} >
        <Link 
            as={NextLink}
            color={'white'}
            href={nav.href ?? '#'}
            _hover={{ color:"#D3102D" }}
            >
            {nav.label}
          </Link>
          </Box>
      ))}</Stack>
  )
}

export default DesktopNav;