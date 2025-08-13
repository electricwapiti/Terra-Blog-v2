import React from "react";
import { Flex, Box, Image, Link, Icon, HStack, Spacer } from "@chakra-ui/react";
import { FaCopy, FaClone, FaCalendarAlt } from "react-icons/fa"; // TODO: Try out the old icons and research why AI gave me this instead
//TODO: Make the links and srcs be to the right points
// TODO: Check out what "Icon as={FaClone} " does. Also consider standardizing whether or not components have the hover attribute.
function Header() {
    return (
        <Box as="header" bg="terraPrimary" color="TerraBg">
            <Flex align="center" maxW="1200px" mx="auto">
                <Link href="/" display="flex" alignItems="center">
                    <Image src="/" alt="Terra Logo" boxSize="40px" borderRadius="full">Terra</Image>
                </Link>
                <HStack as="nav">
                    <Link href="/">
                        <Icon as={FaClone} />Landing
                    </Link>
                    <Link href="/login" _hover={{ color: "terraAccent" }}>Login</Link>
                    <Link href="/signup">Signup</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/write">Write</Link>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Header;