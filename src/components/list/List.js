import React from "react";
import TodoListCard from "./TodoListCard";
import "./List.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function List({ todoList }) {
  return (
    <div className="list-wrapper">
      {todoList.length === 0 ? (
        <div className="empty-list">
          <h1>Let's get some work done!</h1>
          <Button>ADD ITEM</Button>
        </div>
      ) : (
        todoList.map((todo, index) => (
          <Link
            to={"/todo-details/" + todo.id}
            className="link-card"
            key={index}
          >
            <TodoListCard todo={todo} />
          </Link>
        ))
      )}
    </div>
  );
}

export default List;
