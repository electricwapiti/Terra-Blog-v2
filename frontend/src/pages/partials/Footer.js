import React from "react";
import { Box, Flex, HStack, Link, Text, Icon } from "@chakra-ui/react";
import { FaMastodon, FaGithub } from "react-icons/fa";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box as="footer" bg="terra.primary" color="terra.bg">
            <Flex direction="column" align="center">
                <HStack spacing={4}>
                    <Link href="https://mastodon.social/@jackconneely/with_replies" isExternal>
                        <Icon as={FaMastodon} boxSize={6} />
                    </Link>
                    <Link href="https://github.com/electricwapiti" isExternal>
                        <Icon as={FaGithub} boxSize={6} />
                    </Link>
                </HStack>
                <Text>Copyright © {year}</Text>
                <Text>Made by Electricwapiti in Chicago.</Text>
            </Flex>
        </Box>
    );
}

export default Footer;