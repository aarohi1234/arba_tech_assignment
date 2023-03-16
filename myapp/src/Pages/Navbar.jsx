import React from "react";
import { Logo } from "../Component/Logo";
import {
  Box,
  Flex,
  Avatar,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

export function Navbar() {
  let cart = JSON.parse(localStorage.getItem("cart")) || 0;
  return (
    <Flex
      p={"0px 200px"}
      zIndex={700}
      w={"100%"}
      boxShadow="sm"
      height={"90px"}
      alignItems={"center"}
      justifyContent="space-between"
      bgColor={"teal"}
      position={"sticky"}
      top={0}>
      <Logo />

      <Flex gap={"50px"} alignItems={"center"}>
        <Box position={"relative"}>
          <Link to={"/cart"}>
            <GrCart color="white" />
          </Link>
          <Box
            top={"-8px"}
            right={"-16px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"18px"}
            position="absolute"
            width={"18px"}
            borderRadius={"25px"}
            backgroundColor={"blue"}
            color={"white"}>
            <span>{cart.length}</span>
          </Box>
        </Box>
        <Box>
          <Menu>
            <MenuButton>
              <Flex alignItems={"center"} color="white" gap={2}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                />
              </Flex>
            </MenuButton>

            <MenuList color={"skyblue"} fontWeight="800px">
              <MenuItem>
                <Link to={"/"}>
                  <Text ml={2}>LogOut</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/profile"}>
                  <Text ml={2}>Profile</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/codechallenge"}>
                  <Text ml={2}>Code Challenge</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}
