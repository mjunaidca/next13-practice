"use client";

import { Box, Flex, Text, Link, Stack, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" role="presentation">
      <Flex
        bg="white"
        minH="90px"
        borderBottom={1}
        borderStyle="solid"
        borderColor={"gray.200"}
        align="center"
        px={{ base: 4 }}
        py={{ base: 2 }}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start" }} >
          <Link as={NextLink} href='/'>
            <Image
              src="/p.png"
              alt="logo"
              width={'100'}
              height='50' />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
            flex={1}
          >

            <DesktopNav />            

          </Flex>
          <Stack
            flex={{ base: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            align='center'
          >

            <Link 
            as={NextLink} 
            isExternal
            href='https://github.com/panaverse'
            margin={"auto"}
            display={{ base: "none", md: "inline-flex"}}
            >
              <Button
               fontWeight={400}
               variant="link"
               colorScheme="black"
               rightIcon={<ExternalLinkIcon />}
                >Github 
                </Button>
            </Link>

            <Link 
            as={NextLink} 
            isExternal
            href='https://portal.piaic.org/signup'
            display={{ base: "none", md: "inline-flex"}}
            >
              <Button
              fontWeight={400}
              colorScheme={"blue"}
                
                >Apply Now 
                </Button>
            </Link>          
          </Stack>
          
          <Flex
            flex={{ base: 1, md: "auto"}}
            ml={{ base: -2 }}
            display={{ base:'flex', md: 'none'}}
            justify="end"
            >
              <IconButton
              onClick={onToggle}
              bg="transparent"
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon  w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={"Toggle Navigation"}
               />
          </Flex>
        
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
