import React from "react";
import { StyleSheet, View } from "react-native";
import Milestone from "./Milestone";
import ProgressBar from "./ProgressBar";
import ProgressText from "./ProgressText";

interface Progress {
  completed: number;
  total: number;
}

interface MilestoneProgressBarProps {
  totalMilestones: number;
  progress: Progress[];
}

const progressBar = (
  completed: number,
  total: number,
  index: number,
  nextStepStarted: boolean
): React.ReactElement[] => {
  var progress: any[] = new Array();

  if (index === 0 && completed > 0) {
    if (nextStepStarted || completed > 1)
      progress.push(<ProgressBar type="leftCurved" key={`0-${index}`} />);
    else progress.push(<ProgressBar type="default" key={`0-${index}`} />);
  } else if (completed > 0) {
    if (nextStepStarted || completed > 1)
      progress.push(<ProgressBar type="flat" key={`0-${index}`} />);
    else progress.push(<ProgressBar type="rightCurved" key={`0-${index}`} />);
  }

  for (let i = 1; i < completed - 1; i++)
    progress.push(<ProgressBar type="flat" key={`${i}-${index}`} />);

  if (completed > 1) {
    if (nextStepStarted)
      progress.push(
        <ProgressBar type="flat" key={`${completed - 1}-${index}`} />
      );
    else
      progress.push(
        <ProgressBar type="rightCurved" key={`${completed - 1}-${index}`} />
      );
  }

  for (let i = completed; i < total; i++) {
    progress.push(
      <ProgressBar type="blankPlaceholder" key={`${i}-${index}`} />
    );
  }
  return progress;
};

const generateProgressBar = (
  args: MilestoneProgressBarProps
): React.ReactElement[] => {
  const { totalMilestones, progress } = args;
  return progress.map((step, index) => {
    var nextStepStarted = true;
    if (index === totalMilestones - 1 || progress[index + 1].completed === 0) {
      nextStepStarted = false;
    }
    return (
      <View
        style={{ flex: 1, flexDirection: "row" }}
        key={`ProgressBar${index}`}
      >
        {progressBar(step.completed, step.total, index, nextStepStarted)}
        {index === totalMilestones - 1 ? (
          <></>
        ) : (
          <Milestone
            status={step.completed == step.total ? "complete" : "incomplete"}
          />
        )}
      </View>
    );
  });
};

function MilestoneProgressBar(
  props: MilestoneProgressBarProps
): React.ReactElement {
  const { totalMilestones, progress } = props;
  return (
    <View style={styles.tripProgressBarContainer}>
      <View style={styles.progressBarContainer}>
        {generateProgressBar(props)}
      </View>
      <ProgressText totalMilestones={totalMilestones} progress={progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: "#EDEDEF",
    height: 15,
    flexDirection: "row",
    borderRadius: 10.5,
    flex: 10,
  },
  tripProgressBarContainer: {
    flexDirection: "row",
    margin: 5,
  },
});

export default MilestoneProgressBar;
