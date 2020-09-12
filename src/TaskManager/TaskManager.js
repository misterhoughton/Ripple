import React, { Component } from "react";
import AppPage from "../AppPage";
import TaskManagerInput from "./TaskManagerInput";
import TaskManagerList from "./TaskManagerList";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: this.getNewTask(),
    };
    this.updateNewTaskName = this.updateNewTaskName.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }
  getNewTask = function () {
    return {
      title: "",
      timeLog: [],
    };
  };
  addNewTask = function (task) {
    if (this.taskHasTitle(task)) {
      this.props.addNewTask(task);
      this.setState({
        newTask: this.getNewTask(),
      });
    }
  };
  getTaskcopy = function (task) {
    let taskCopy = {};
    Object.assign(taskCopy, task);
    return taskCopy;
  };
  taskHasTitle = function (task) {
    return task.hasOwnProperty("title") && task.title !== "";
  };
  updateNewTaskName = function (e) {
    let taskCopy = this.getTaskcopy(this.state.newTask);
    taskCopy.title = e.target.value;
    this.setState({
      newTask: taskCopy,
    });
  };
  render() {
    return (
      <AppPage id="page-1" activePage={this.props.activePage}>
        <div name="TaskManager">
          <TaskManagerInput
            addNewTask={this.addNewTask}
            newTask={this.state.newTask}
            taskHasTitle={this.taskHasTitle}
            updateNewTaskName={this.updateNewTaskName}
          />
          <TaskManagerList
            className="tm-btn-add"
            tasks={this.props.tasks}
            confirm={this.props.confirm}
            deleteTask={this.props.deleteTask}
            setSelectedTaskIndex={this.props.setSelectedTaskIndex}
          />
        </div>
      </AppPage>
    );
  }
}

export default TaskManager;
