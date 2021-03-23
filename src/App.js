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
      todos: [],
    };
  }

  getTodoDetails = (id) => {
    return this.state.todos.filter((todo) => todo.id === id);
  };

  addTodo = (todo) => {
    this.setState((prevState) => ({todos: [todo, ...prevState.todos]}))
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => (todo.id !== id));
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <Router>
        <Container id="app-wrapper">
          <Navbar taskRemaining={this.state.todos.length} />
          <Controls />
          <Switch>
            <Route exact path="/">
              <List todoList={this.state.todos} />
            </Route>
            <Route path="/add-new">
              <AddTodo addTodo={this.addTodo}/>
            </Route>
            <Route path="/todo-details/:id">
              <TodoDetails getTodoDetails={this.getTodoDetails} deleteTodo={this.deleteTodo}/>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
