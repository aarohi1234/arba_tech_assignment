import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navbar } from "../Pages/Navbar";

function CodeChallenge() {
  let [data, setData] = useState("");
  let [result, setResult] = useState("");

  let handleCodeChallenge = (data) => {
    data = data.split(",").map(Number);
    console.log(data);
    let x = 1;

    data
      .filter((x) => x >= 1)
      .sort((a, b) => a - b)
      .map((el, i, arr) => {
        if (x < arr[i]) return;
        x = arr[i] + 1;
      });
    setResult(x);
    return x;
  };

  return (
    <Box h={"auto"}>
      <Navbar />

      <Box m={"auto"}>
        <Box
          w={"95%"}
          textAlign={"left"}
          fontSize={20}
          fontWeight={750}
          m={"auto"}>
          <Text>Code Challenge</Text>
        </Box>
        <Box
          w={"90%"}
          m={"auto"}
          pt={20}
          pb={20}
          bgColor={"rgb(44, 203, 203)"}
          color={"white"}
          fontWeight={750}>
          <Text>Write a function:</Text>
          <Text>Function solution(A);</Text>
          <Text>
            That given an Array of N integers, return the smallest possitive
            integer (greater than 0) that doesnot occour in A.
          </Text>
          <Text>
            For example. given A=[1,3,6,4,1,2] the function should return 5.{" "}
          </Text>
          <Text> given A=[1,2,3] the function should return 4. </Text>
          <Text> given A=[-1,-3] the function should return 1. </Text>
          <Text>
            {" "}
            Writer an efficient algorithm for the following assumptions:
          </Text>
          <Text> N is a integer with in the range [1..100,000];</Text>
          <Text>
            {" "}
            Each element of array A is an integer with in the range
            [-1,000,000..100,000,000];
          </Text>
        </Box>
      </Box>
      <Box
        m={"auto"}
        padding={{ base: 4, sm: 14, md: 14, lg: 8, xl: 10 }}
        w={"90%"}>
        <Box textAlign={"left"} fontSize={20} fontWeight={750} m={"auto"}>
          <Text>Data Collection</Text>
        </Box>

        <Box
          w={"fit-content"}
          textAlign={"left"}
          display={"flex"}
          flexDir={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={10}
          pt={5}
          pb={5}>
          <FormControl>
            <Input
              placeholder="input"
              borderBottom="2px solid rgb(44, 203, 203)"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <Text>Enter the values with comma(,)seperator eg: 1,3,6,4,1,2</Text>
          </FormControl>
          <Button
            onClick={() => handleCodeChallenge(data)}
            bgColor={"rgb(44, 203, 203)"}
            color={"white"}>
            Print Result
          </Button>
        </Box>
      </Box>
      <Box textAlign={"left"} fontSize={20} fontWeight={700} m={"auto"}>
        <Text ml={78}>Output</Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "left",
          lg: "left",
          xl: "left",
        }}
        alignItems={"center"}
        fontSize={20}
        fontWeight={700}
        m={"auto"}
        pl={"5%"}>
        <Box mt={".5rem"} bgColor={"rgb(44, 203, 203)"} p={"0 1rem 0 1rem"} color={"white"}>
          {result}
        </Box>
      </Box>
      <Box
        w={"95%"}
        textAlign={"left"}
        fontSize={20}
        fontWeight={750}
        m={"auto"}>
        <Text mt={"2.5rem"}>Note::</Text>
          </Box>
          
      <Box mt={"1rem"}
        w={"40%"}
        ml={90}
        bgColor={"rgb(44, 203, 203)"}
        pt={8}
        pb={20}
        color={"white"}
        fontWeight={750}>
        <Text>
          {">>"}You need to read the data from above dataut and convert that{" "}
        </Text>
        <Text>values into array eg:1,3,6,4,1,2 will be[1,3,6,4,1,2].</Text>
        <Text>
          {">>"}Use above converted array as a dataut to your solution function
        </Text>
        <Text>
          {">>"}Display the output result in above output section once you{" "}
        </Text>
        <Text> called the solution function and get the result </Text>
      </Box>
    </Box>
  );
}

export default CodeChallenge;
