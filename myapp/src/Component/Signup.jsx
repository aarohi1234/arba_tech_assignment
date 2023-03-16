import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Side } from "./Side";

export function Signup() {
  let [show, setShow] = useState(0);

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      <Box
        m={"auto"}
        boxShadow={"md"}
        width={{ base: "96%", sm: "50%", md: "72%", lg: "68%", xl: "53%" }}
        h={"90vh"}
        mt={10}
        display={"flex"}>
        <Side />
        <Box
          gap={5}
          padding={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10 }}
          display={"flex"}
          alignItems={"center"}
          flexDir={"column"}
          justifyItems={"center"}
          border={"none "}
          w={ "400px"}>
          <Logo />
          <Text>Make your shopping easy</Text>
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <Stack spacing={5}>
                <Input
                  placeholder="Username"
                  borderBottom="2px solid skyblue"
                />
                <Input
                  placeholder="Fullname"
                  borderBottom="2px solid skyblue"
                />
                <Input
                  placeholder="Email"
                  variant="flushed"
                  borderBottom="2px solid skyblue"
                />

                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={show ? "text" : "password"}
                    borderBottom="2px solid skyblue"
                  />
                  <InputRightElement width="100px">
                    <Button
                      h="1.75rem"
                     
                      >
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder="Confirm password"
                    type={show ? "text" : "password"}
                    borderBottom="2px solid skyblue"
                  />
                  <InputRightElement width="100px">
                    <Button
                      h="1.75rem"
                      size="sm"
                      
                      onClick={() => setShow((show) => !show)}>
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text
                  type={"submit"}
                  cursor={"pointer"}
                  bgColor={"rgb(44, 203, 203)"}
                  color={"white"}>
                  Register
                </Text>
                <Text>
                  Already have an account?{" "}
                  <Link to={"/"} style={{ color: "skyblue" }}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
