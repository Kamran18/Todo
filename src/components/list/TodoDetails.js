import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./TodoDetails.css";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { AiTwotoneDelete } from 'react-icons/ai';

function TodoDetails({ getTodoDetails, deleteTodo }) {
  const history = useHistory();
  let { id } = useParams();
  const todo = getTodoDetails(Number(id));

  console.log("ZZZ", todo);

  const handleClick = () => {
    deleteTodo(Number(id));
    history.push('/Todo');
  }

  return todo.length === 0 ? (
    <Redirect to={{ pathname: "/NoMatch" }} />
  ) : (
    <div className="list-wrapper">
      <div className="head">
        <Row className="head-top">
          <h3 className="todo-title">{todo[0].title}</h3>
          <Button variant='outline-danger' id="del-btn" onClick={handleClick}>
            <AiTwotoneDelete />
          </Button>
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
