import { View, Text } from "react-native";
import React from "react";
import Sensor2 from "./Sensor2";

const Paralax = ({ layers }) => {
  return (
    <>
      {layers.reverse().map((layer, index) => (
        <Sensor2 key={`layer_${index}`}
         image={layers} 
         order={index + 1} />
      ))}
    </>
  );
};

export default Paralax;
