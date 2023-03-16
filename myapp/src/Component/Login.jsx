import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { UserLogin } from "../Redux/Auth/action";
import { Side } from "./Side";
import { Box, InputGroup, Stack, Input, Button, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, token } = useSelector((store) => store.auth);

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    if (data.username === "mor_2314" && data.password === "83r5^_") {
      dispatch(UserLogin(data));
      navigate("/home");
    } else {
      alert(`wrong credentials "`);
    }
  }

  return (
    <>
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
              <form action="">
                <Input
                  borderBottom="2px solid skyblue"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <InputGroup>
                  <Input
                    mt={2}
                    placeholder="Password"
                    borderBottom="2px solid skyblue"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <br />
                </InputGroup>
                <Button
                  mt={3}
                  _hover="none"
                  width={"full"}
                  bgColor="rgb(44, 203, 203)"
                  type="submit"
                  onClick={(e) => handleLogin(e)}>
                  Login
                </Button>
              </form>

              <h5>
                Don't have an account?{" "}
                <Link to={"/signup"} style={{ color: "skyblue" }}>
                  Signup
                </Link>
              </h5>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
