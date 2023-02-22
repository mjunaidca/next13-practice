"use client";

import { Box, Flex, Link, Stack, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" role="presentation">
      <Flex
        bg="black"
        minH="80px"
        alignItems="center"
        justifyContent={'space-between'} 
      >

        <Link as={NextLink} href='/' px={'36'} py='20'>
          <Image src='/logo.png' alt='panaverse' height='160' width='160'/>
        </Link>

        <Flex
            display={{ base: "none", md: "flex" }}
          >
            {/* <DesktopNav />             */}
          </Flex>


      </Flex>
    </Box>
  );
};

export default Navbar;
