import React from "react";
import { StyleSheet, View } from "react-native";

interface MilestoneProps {
  status: string;
}

function Milestone(props: MilestoneProps): React.ReactElement {
  const { status } = props;
  return (
    <View
      style={
        status === "complete" ? styles.completeStep : styles.incompleteStep
      }
    ></View>
  );
}

const styles = StyleSheet.create({
  incompleteStep: {
    backgroundColor: "#B5B5B6",
    height: 8,
    width: 8,
    borderRadius: 4,
    position: "absolute",
    alignSelf: "center",
    right: 3,
  },
  completeStep: {
    backgroundColor: "#EDEDEF",
    height: 8,
    width: 8,
    borderRadius: 4,
    position: "absolute",
    alignSelf: "center",
    right: 3,
  },
});

export default Milestone;
