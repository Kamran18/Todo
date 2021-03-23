import React from "react";
import { Redirect, useParams } from "react-router-dom";
import "./TodoDetails.css";
import { FcTodoList } from "react-icons/fc";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TodoDetails({ getTodoDetails }) {
  let { id } = useParams();
  const todo = getTodoDetails(Number(id));

  console.log("ZZZ", todo);

  return todo.length === 0 ? (
    <Redirect to={{ pathname: "/NoMatch" }} />
  ) : (
    <div className="list-wrapper">
      <div className="head">
        <Row>
          <h3 className="todo-title">{todo[0].title}</h3>
        </Row>
        <Row>
          <Col xs={4}>{todo[0].category}</Col>
          <Col>
            <h6 className="todo-date">{moment(todo[0].deadLine).calendar()}</h6>
          </Col>
        </Row>
      </div>

      <div className="body">{todo[0].task}</div>
    </div>
  );
}

export default TodoDetails;
