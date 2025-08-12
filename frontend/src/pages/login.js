import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, } from "@chakra-ui/react";

function LoginForm() { // TODO: Add action="/login" method="POST" to form once I implement it.
    return (
        <Box>
            <Heading>Log In</Heading>
            <form>
                <VStack>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" placeholder="Enter email" autoComplete="email"/>
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" placeholder="Enter password" autocomplete="current-password"/>
                    </FormControl>
                    <Button type="submit">Sign In</Button>
                </VStack>
            </form>
        </Box>
    );
}

export default LoginForm;