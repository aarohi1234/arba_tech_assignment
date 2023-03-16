import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Image, Img } from "@chakra-ui/react";
const Carousel = () => {
  let Images = [
    {
      image: "https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg",
    },
    {
      image: "https://media.sproutsocial.com/uploads/2022/04/Instagram-Carousels.jpg",
    },
    {
      image: "https://www.w3schools.com/bootstrap4/chicago.jpg",
    },
    {
      image: "https://www.w3schools.com/bootstrap4/ny.jpg",
    },
  ];
  const [imagee, setImage] = useState(0);
  const Total = Images.length;
  
  const prev = () => {
    setImage(imagee === 0 ? Total - 1 : imagee - 1);
  };
  const next = () => {
    setImage(imagee === Total - 1 ? 0 : imagee + 1);
  };


  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const slider = () => {
    slideInterval = setInterval(next, intervalTime);
  };

  useEffect(() => {
    setImage(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slider();
    }
    return () => clearInterval(slideInterval);
  }, [imagee]);
  return (
    <Box>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
        }}>
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            color: "grey",
            fontSize: "40px",
            left: "5%",
          }}>
          {"<"}
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            color: "grey",
            fontSize: "40px",
            right: "4%",
          }}>
          {">"}
        </button>
        {Images.map((slide, index) => {
          return (
            <Box key={index}>
              <Box>
                {index === imagee && (
                  <Img
                    src={slide.image}
                    alt="img"
                    width={"100%"}
                    height={"400px"}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default Carousel;
