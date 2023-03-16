import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { Navbar } from "../Pages/Navbar";
const Cart = () => {
  const [ans, setAns] = useState(1);
  const handleInc = () => {
    setAns(ans + 1);
  };
  const handleDec = () => {
    if (ans > 1) {
      setAns(ans - 1);
    }
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || 0;
  return (
    <>
       <Navbar/>
    <Box p="10">
      
      <Box p="20">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {cart.length > 1 &&
            cart.map((ele, i) => {
              return (
                <Card maxW="sm" key={i}>
                  <CardBody>
                    <Image src={ele.image} alt="nidhi" borderRadius="sm" />
                    <Stack mt="6" spacing="3" textAlign={"justify"}>
                      <Heading size="md">{ele.title}</Heading>
                      <Text>
                        <b>Rating:{ele.rating.rate}</b>
                      </Text>
                      <Text>
                        <b>category:</b>
                        {ele.category}
                      </Text>
                      <Text color="blue.600" fontSize="2xl">
                        ₹{ele.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Box alignItems={"center"}>
                        <Button onClick={() => handleDec(ele, i)}>-</Button>
                        {ans}
                        <Button onClick={() => handleInc(ele, i)}>+</Button>
                      </Box>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
        </SimpleGrid>
      </Box>
      <Box float="right" p="1">
        <Button bg="skyblue" color="white">
          Checkout
        </Button>
      </Box>
      </Box>
      </>
  );
};

export default Cart;
