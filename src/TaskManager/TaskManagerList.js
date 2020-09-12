import React from "react";
import { getTotalTime, formatTime } from "../TimeHelper";
import TimeCounter from "../Timer/TimeCounter";

function TaskManagerDeleteIcon() {
  return (
    <svg
      className="ripple-icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
    >
      <path
        d="M13.7,36.8c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l22.6-22.6c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
	L14.1,36.7C14,36.8,13.8,36.8,13.7,36.8z"
      />
      <path
        d="M36.3,36.8c-0.1,0-0.3,0-0.4-0.1L13.3,14.1c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l22.6,22.6
	c0.2,0.2,0.2,0.5,0,0.7C36.6,36.8,36.4,36.8,36.3,36.8z"
      />
      <path
        d="M25,50C11.2,50,0,38.8,0,25S11.2,0,25,0s25,11.2,25,25S38.8,50,25,50z M25,1C11.8,1,1,11.8,1,25
	c0,13.2,10.8,24,24,24c13.2,0,24-10.8,24-24C49,11.8,38.2,1,25,1z"
      />
    </svg>
  );
}
function TaskManagerList(props) {
  return (
    <ul className="tm-list">
      {props.tasks.map((task, index) => (
        <TaskManagerListItem
          task={task}
          index={index}
          key={task.id}
          confirm={
            props.confirm.taskId === task.id && !props.confirm.delete
          }
          deleteTask={props.deleteTask}
          setSelectedTask={props.setSelectedTask}
          setSelectedTaskIndex={props.setSelectedTaskIndex}
        />
      ))}
    </ul>
  );
}
function TaskManagerListItem(props) {
  const totalTime = getTotalTime(props.task.timeLog),
    formattedTime = formatTime(totalTime);

  return (
    <li className="tm-item" key={props.task.id}>
      <button
        name="selectTask"
        aria-label="Select"
        className="tm-item-select"
        onClick={() => props.setSelectedTaskIndex(props.index)}
      >
        <span className="tm-item-date">
          {new Date(props.task.id).toLocaleDateString()}
        </span>
        <br />
        {props.task.title}
        <span className="tm-item-timecounter">
          <TimeCounter
            minutes={formattedTime.minutes}
            seconds={formattedTime.seconds}
          />
        </span>
      </button>
      <button
        name="delete task"
        aria-label="Delete"
        className={`tm-item-delete${
          props.confirm ? " confirm-delete" : ""
        }`}
        onClick={() => props.deleteTask(props.index)}
      >
        <TaskManagerDeleteIcon />
      </button>
    </li>
  );
}

export default TaskManagerList;
