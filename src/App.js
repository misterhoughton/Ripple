import React from "react";
import Header from "./Header/Header";
import RippleBg from "./RippleBg/RippleBg";
import SelectedTask from "./TaskManager/SelectedTask";
import TaskManager from "./TaskManager/TaskManager";
import Ticker from "./Ticker";
import "./index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "page-1",
      confirm: {},
      isTicking: false,
      ms: 0,
      selectedTaskIndex: undefined,
      tasks: [],
      totalMs: 0,
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.addToTimeLog = this.addToTimeLog.bind(this);
    this.confirmAction = this.confirmAction.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.getSelectedTask = this.getSelectedTask.bind(this);
    this.setSelectedTaskIndex = this.setSelectedTaskIndex.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  addNewTask = function (newTask) {
    const tasks = [...this.state.tasks];
    newTask.id = Date.now();
    tasks.push(newTask);
    this.setState({
      tasks: tasks,
    });
    this.setSelectedTaskIndex(tasks.length - 1);
  };
  addToTimeLog = function (timeObj) {
    const taskCopy = this.getObjCopy(this.getSelectedTask()),
      tasksCopy = [...this.state.tasks];
    taskCopy.timeLog.push(timeObj);
    tasksCopy[this.state.selectedTaskIndex] = taskCopy;
    this.setState({
      tasks: tasksCopy,
    });
  };
  confirmAction = function (index) {
    const taskId = this.state.tasks[index].id,
      confirmCopy = this.getObjCopy(this.state.confirm);
    confirmCopy.delete =
      confirmCopy.hasOwnProperty("taskId") && confirmCopy.taskId === taskId;
    confirmCopy.taskId = taskId;
    let resetConfirm = function () {
      this.setState({
        confirm: {},
      });
    };
    resetConfirm = resetConfirm.bind(this);//
    if (!confirmCopy.delete) {
      document.removeEventListener("click", resetConfirm);
      document.addEventListener("click", resetConfirm, { once: true });
    }
    this.setState({
      confirm: confirmCopy,
    });
    return confirmCopy.delete;
  };
  deleteTask = function (index) {
    if (this.confirmAction(index)) {
      const tasksCopy = [...this.state.tasks];
      tasksCopy.splice(index, 1);
      this.setState({
        tasks: tasksCopy,
      });
    }
  };
  getSelectedTask = function () {
    if (this.state.selectedTaskIndex !== undefined) {
      return this.state.tasks[this.state.selectedTaskIndex];
    }
    return;
  };
  getObjCopy = function (obj) {
    let objCopy = {};
    Object.assign(objCopy, obj);
    return objCopy;
  };
  setActivePage = function (pageId) {
    this.stop();
    this.setState({
      activePage: pageId,
      ms: 0,
    });
  };
  setSelectedTaskIndex = function (index) {
    this.setState({
      activePage: "page-2",
      selectedTaskIndex: index,
    });
  };
  start = function () {
    this.Ticker.start();
  };
  stop = function () {
    this.Ticker.stop();
  };
  Ticker = new Ticker(this);

  render() {
    return (
      <div className="App">
        <RippleBg />
        <Header
          title="ripple"
          setActivePage={this.setActivePage}
          hideBtn={this.state.activePage === "page-1"}
        />
        <TaskManager
          tasks={this.state.tasks}
          activePage={this.state.activePage}
          addNewTask={this.addNewTask}
          confirm={this.state.confirm}
          deleteTask={this.deleteTask}
          setSelectedTaskIndex={this.setSelectedTaskIndex}
        />
        <SelectedTask
          task={this.getSelectedTask()}
          timeout={this.timeout}
          activePage={this.state.activePage}
          isTicking={this.state.isTicking}
          start={this.start}
          stop={this.stop}
          ms={this.state.ms}
        />
      </div>
    );
  }
}

export default App;
