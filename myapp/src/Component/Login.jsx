import {
  Box,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "./../Redux/Auth/action";
import { Side } from "./Side";
import { Logo } from "./Logo";

export function Login() {
  let [data, setData] = useState(false);
  let [username, setUsername] = useState("mor_2314");
  let [password, setPassword] = useState("82r5^_");
  let dispatch = useDispatch();
  const navigate = useNavigate();

  let handleData = (e) => {
    e.preventDefault();
    let payload = {
      username,
      password,
    };
    dispatch(userLogin());
    alert("Login success");
    navigate("/home");
  };
  return (
    <Box>
      <Box
        m={"auto"}
        boxShadow={"md"}
        width={{ base: "95%", sm: "55%", md: "70%", lg: "65%", xl: "50%" }}
        h={"80vh"}
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
          <Logo />

          <Text>Make your shopping easy</Text>
          <Box width="100%">
            <form onSubmit={handleData}>
              <Stack spacing={4}>
                <Input
                  value={username}
                  placeholder="Username"
                  borderBottom="2px solid skyblue"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <InputGroup>
                  <Input
                    value={password}
                    placeholder="Password"
                    type={data ? "text" : "password"}
                    borderBottom="2px solid skyblue"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button onClick={() => setData((data) => !data)}>
                      {data ? (
                        <ViewIcon color={"skyblue"} />
                      ) : (
                        <ViewOffIcon color={"skyblue"} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Input
                  type={"submit"}
                  cursor={"pointer"}
                  placeholder={"Login"}
                  bgColor={"skyblue"}
                  color={"white"}
                />
                <Text>
                  Don't have an account?{" "}
                  <Link to={"/signup"} style={{ color: "skyblue" }}>
                    Sign up
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
