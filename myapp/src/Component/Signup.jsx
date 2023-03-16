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
            w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}>
            <div
              style={{
                width: "70px",
                height: " 70px",
                backgroundColor: "rgb(30, 173, 173)",
                borderRadius: "100%",
              }}></div>
            <Stack spacing={4}>
              <Text fontSize={30} fontWeight={600}>
                APP NAME
              </Text>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</p>
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
                <Button
                  mt={3}
                  _hover="none"
                  width={"full"}
                  bgColor="rgb(44, 203, 203)"
                  type="submit"
                  >
                  Register
                </Button>
                <Text>
                  Already have an account?{" "}
                  <Link to={"/"} style={{ color: "skyblue" }}>
                    Login
                  </Link>
                </Text>
              </Stack>
     
          </Box>
        </Box>
      </Box>

  );
}
