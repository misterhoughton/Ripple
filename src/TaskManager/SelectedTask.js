import React from "react";
import AppPage from "../AppPage";
import Timer from "../Timer/Timer";

function TaskDetail(props) {
  if (props.task === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <h2 className="task-title">{props.task.title}</h2>
      <Timer
        timeLog={props.task.timeLog}
        addToTimeLog={props.addToTimeLog}
        ms={props.ms}
        isTicking={props.isTicking}
        setMs={props.setMs}
        start={props.start}
        stop={props.stop}
      />
    </React.Fragment>
  );
}

function SelectedTask(props) {
  return (
    <AppPage id="page-2" activePage={props.activePage}>
      <TaskDetail
        task={props.task}
        ms={props.ms}
        isTicking={props.isTicking}
        start={props.start}
        stop={props.stop}
      />
    </AppPage>
  );
}

export default SelectedTask;
