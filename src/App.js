import React, { Component } from "react";
import "./App.css";
import Controls from "./components/layout/Controls";
import Navbar from "./components/layout/Navebar";
import List from "./components/list/List";
import AddTodo from "./components/list/AddTodo";
import TodoDetails from "./components/list/TodoDetails";
import Container from "react-bootstrap/Container";
import NoMatch from "./NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          category: "Home",
          title: "shopping, chilling and eating hahaha",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy v v Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 0,
        },
        {
          category: "Home",
          title: "shopping",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 1,
        },
        {
          category: "Home",
          title: "shopping",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 2,
        },
        {
          category: "Home",
          title: "shopping",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 3,
        },
        {
          category: "Home",
          title: "shopping",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 4,
        },
        {
          category: "Home",
          title: "shopping",
          task:
            "Buy 12 dozens eggs , 3 ice-creams cone, 10 choclates and bunch of candy",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 5,
        },
        {
          category: "Office",
          title: "Project XYZ",
          task: "Submit report by 18 Mar and prepare ppt",
          dataCreated: new Date(),
          deadLine: new Date(),
          id: 6,
        },
      ],
    };
  }

  getTodoDetails = (id) => {
    return this.state.todos.filter((todo) => todo.id === id);
  };

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: {...prevState, todo}
    }))
  }

  render() {
    return (
      <Router>
        {/* // <div className="app"> */}
        <Container id="app-wrapper">
          <Navbar taskRemaining={this.state.todos.length} />
          <Controls />
          {/* <div> */}
          <Switch>
            <Route exact path="/">
              <List todoList={this.state.todos} />
            </Route>
            <Route path="/add-new">
              <AddTodo />
            </Route>
            <Route path="/todo-details/:id">
              <TodoDetails getTodoDetails={this.getTodoDetails} />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          {/* </div> */}
        </Container>
        {/* // </div> */}
      </Router>
    );
  }
}

export default App;
