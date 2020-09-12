import React from "react";

function TaskManagerInput(props){
    return (
        <div className="tm-add-wrapper">
          <input
            id="newTaskInput"
            name="newTaskInput"
            aria-label="New task input"
            aria-required="true"
            className="tm-input-add"
            type="text"
            onChange={props.updateNewTaskName}
            onBlur={() => props.addNewTask(props.newTask)}
            placeholder="Add new task"
            value={props.newTask.title}
          />
          <button
            name="add task"
            className="tm-btn-add"
            disabled={!props.taskHasTitle(props.newTask)}
            onClick={() => props.addNewTask(props.newTask)}
          >
            <small>add</small>
          </button>
        </div>
    )
}

export default TaskManagerInput;