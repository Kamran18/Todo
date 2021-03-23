import React from "react";
import moment from "moment";
import { FcTodoList } from "react-icons/fc";
import "./TodoListCard.css";

function TodoListBlock({ todo }) {
  const { task, title, deadLine } = todo;

  return (
    <div className="todo-card">
      <div className="todo-info">
        <FcTodoList size={"25px"} />

        <div className="todo-task-and-title">
          <h5 className="card-title">{title}</h5>
          <div className="todo-task">{task}</div>
        </div>
      </div>

      <h6 className="todo-date">{moment(deadLine).calendar().split(' ')[0]}</h6>
    </div>
  );
}

export default TodoListBlock;
