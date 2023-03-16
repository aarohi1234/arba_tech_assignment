import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  ButtonGroup,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar } from "../Pages/Navbar";


const AllProduct = () => {
  const [data, setData] = useState([]);

  let item = [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function getData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const handleData = (ele, id) => {
    console.log(ele);
    cart.push(ele);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added Sucessfully");
    window.location.reload();
  };

  cart.map((ele) => {
    item.push(Number(ele.id));
  });

  useEffect(() => {
    getData("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      <Navbar/>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {data.map((ele, i) => {
            return (
              <Card key={i}>
                <CardBody>
                  <Image
                    width={"100%"}
                    height={"400px"}
                    src={ele.image}
                    alt="nidhi"
                    borderRadius="sm"
                  />
                  <Stack mt="6" spacing="3" textAlign={"justify"}>
                    <Heading size="md">{ele.title}</Heading>
                    <Text>
                      <b>Rating:{ele.rating.rate}</b>
                    </Text>
                    <Text>
                      <b>category:</b>
                      {ele.category}
                    </Text>
                    <Text color="skyblue" fontSize="2xl">
                      ₹{ele.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="0">
                    {item.includes(ele.id) ? (
                      <Box alignItems={"center"}>
                        <Button>+</Button>
                        {1}
                        <Button>-</Button>
                      </Box>
                    ) : (
                      <Button
                        variant="solid"
                        color="skyblue"
                        onClick={() => handleData(ele, i)}>
                        Add To Cart
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
        <Link style={{ display: "flex", justifyContent: "end", marginRight: "2rem", color: "white" }} to={"/products"}><Button bgColor={"skyblue"} _hover="none">All Products { ""}</Button></Link>
      </Box>

    </Box>
  );
};

export default AllProduct;
