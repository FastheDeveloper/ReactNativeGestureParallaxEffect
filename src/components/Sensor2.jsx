import { StyleSheet, useWindowDimensions } from "react-native";

import Animated, {
  useAnimatedSensor,
  SensorType,
  withTiming,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
const IMAGE_OFFSET = 100;
const PI = Math.PI;
const HALF_PI = PI / 2;

const Sensor2 = ({ image, order }) => {
  const { width, height } = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION);
  const ImageStyle = useAnimatedStyle(() => {
    const { yaw, pitch, roll } = sensor.sensor.value;
    console.log(yaw, pitch, roll);
    console.log(yaw.toFixed(1), pitch.toFixed(1), roll.toFixed(1));
    return {
      top: withTiming(
        interpolate(
          pitch,
          [-HALF_PI, HALF_PI],
          [(-IMAGE_OFFSET * 2) / order, 0]
        ),
        { duration: 100 }
      ),
      left: withTiming(
        interpolate(roll, [-PI, PI], [(-IMAGE_OFFSET * 2) / order, 0]),
        { duration: 100 }
      ),
    };
  });
  return (
    <Animated.Image
      source={image}
      style={[
        {
          width: width + (2 * IMAGE_OFFSET) / order,
          height: height + (2 * IMAGE_OFFSET) / order,
          position: "absolute",
        },
        ImageStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "100%",
    height: "100%",
  },
});

export default Sensor2;
