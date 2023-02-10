"use client";

import { Box, Flex, Text, Link, Stack, Button } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box as="nav" role="presentation">
      <Flex
        bg="white"
        minH="60px"
        borderBottom={1}
        borderStyle="solid"
        borderColor={"gray.200"}
        align="center"
        px={{ base: 2 }}
        py={{ base: 2 }}

      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} >
          <Link as={NextLink} href='/'>
            <Image
              src="/p.png"
              alt="logo"
              width={'150'}
              height='50' />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
            flex={1}
          >
            <Text px={2} >A</Text>
            <Text px={2}>B</Text>
            <Text px={2}>C</Text>
            <Text px={2}>D</Text>
          </Flex>
          <Stack
            flex={{ base: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Link 
            as={NextLink} 
            isExternal
            href='github.com/panaverse'
            margin={"auto"}
            display={{ base: "none", md: "inline-flex"}}
            >
              <Button
                fontWeight={400}
                colorScheme="messenger"
                >Github 
                </Button>
            </Link>

            <Link 
            as={NextLink} 
            isExternal
            href='piaic.org'
            >
              <Button
                fontWeight={400}
                variant="link"
                color={"blue"}
                >Apply Now 
                </Button>
            </Link>

          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
