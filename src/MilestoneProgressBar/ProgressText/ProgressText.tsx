import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Progress {
  completed: number;
  total: number;
}

interface ProgressTextProps {
  totalMilestones: number;
  progress: Progress[];
}

const getTextFromProgress = (args: ProgressTextProps): string => {
  const { totalMilestones, progress } = args;
  var completedSteps = progress.reduce((pv, cv) => {
    return pv + (cv.completed === cv.total ? 1 : 0);
  }, 0);
  return `${completedSteps}/${totalMilestones}`;
};

function ProgressText(props: ProgressTextProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getTextFromProgress(props)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#B5B5B6",
    fontFamily: "Celias-Bold",
    fontSize: 12,
    lineHeight: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ProgressText;
