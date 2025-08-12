import React from "react";
import { Flex, Box, Image, Link, Icon, HStack, Spacer } from "@chakra-ui/react";
import { FaCopy, FaClone, FaCalendarAlt } from "react-icons/fa"; // TODO: Try out the old icons and research why AI gave me this instead
//TODO: Finish the header file (see chatgpt session "Connect MongoDB with Mongo...")
function Header() {
    return (
        <Box as="header" bg="terraPrimary" color="TerraBg">
            <Flex align="center" maxW="1200px" mx="auto">
                <link href="/" display="flex" alignItems="center">
                    <Image src="/"
                </link>
            </Flex>
        </Box>
    );
}