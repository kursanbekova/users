import React, { useState } from "react";
import ButtonAdd from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleCompleted,
} from "../../slices/todoSlice";
import TodoItem from "../TodoItem";
import styled from "styled-components";

const TodoApp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);

  const dispatch = useDispatch();

  const nameValueHandler = (e) => {
    setName(e.target.value);
  };

  const passwordValueHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailValueHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitFn = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("Введите сперва данные");
      setName("");
      setPassword("");
      setEmail("");
      return;
    }

    dispatch(addTodo({ name, password, email }));
    setName("");
    setPassword("");
    setEmail("");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleCompleted(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const editHandler = (task) => {
    dispatch(editTodo(task));
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmitFn}>
        <label>Enter your name</label>
        <input value={name} onChange={nameValueHandler} type="text" />
        <label>Enter your password</label>
        <input
          value={password}
          onChange={passwordValueHandler}
          type="password"
        />
        <label>Enter yur email</label>
        <input value={email} onChange={emailValueHandler} type="email" />
        <div>
          <ButtonAdd type="submit">log in</ButtonAdd>
        </div>
      </StyledForm>

      {todos.map((todo) => {
        console.log("toodod", todo);

        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            email={todo.email}
            password={todo.password}
            completed={todo.status}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
            onEdit={editHandler}
          />
        );
      })}
    </div>
  );
};

export default TodoApp;

const StyledForm = styled.form`
  width: 600px;
  height: 350px;
  padding-top: 20px;
  margin: auto;
  background-color: #ffeed9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 30px;

  > input {
    width: 250px;
    height: 30px;
    border-radius: 4px;
  }
`;
