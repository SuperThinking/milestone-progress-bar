import React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
  type: string;
}

const getStyleFromType = (type: string): object => {
  if (type === "flat") return styles.flatProgressBar;
  else if (type === "leftCurved") return styles.leftCurvedProgressBar;
  else if (type === "rightCurved") return styles.rightCurvedProgressBar;
  else if (type === "default") return styles.defaultProgressBar;
  return styles.blankProgressBar;
};

function ProgressBar(props: ProgressBarProps): React.ReactElement {
  const { type } = props;
  return <View style={getStyleFromType(type)}></View>;
}

const styles = StyleSheet.create({
  defaultProgressBar: {
    flex: 1,
    backgroundColor: "#B5B5B6",
    height: 15,
    borderRadius: 10.5,
  },
  leftCurvedProgressBar: {
    flex: 1,
    backgroundColor: "#B5B5B6",
    height: 15,
    borderTopLeftRadius: 10.5,
    borderBottomLeftRadius: 10.5,
  },
  flatProgressBar: {
    flex: 1,
    backgroundColor: "#B5B5B6",
    height: 15,
  },
  rightCurvedProgressBar: {
    flex: 1,
    backgroundColor: "#B5B5B6",
    height: 15,
    borderTopRightRadius: 10.5,
    borderBottomRightRadius: 10.5,
  },
  blankProgressBar: {
    flex: 1,
    backgroundColor: "#EDEDEF",
    height: 15,
    borderRadius: 10.5,
  },
});

export default ProgressBar;
