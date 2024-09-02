import React, { useState } from "react";
import ButtonAdd from "./UI/Button";
import styled from "styled-components";

const TodoItem = ({
  name,
  email,
  password,
  id,
  completed,
  handleToggleComplete,
  handleDeleteTodo,
  onEdit,
}) => {
  const [editing, setEditing] = useState(false);
  const [nameEdit, setNameEdit] = useState(name);
  const [emailEdit, setEmailEdit] = useState(email);
  const [passwordEdit, setPasswordEdit] = useState(password);

  const onEditingHandler = () => {
    setEditing((prev) => !prev);
  };

  const nameValueHandler = (e) => {
    setNameEdit(e.target.value);
  };
  const emailValueHandler = (e) => {
    setEmailEdit(e.target.value);
  };
  const passwordValueHandler = (e) => {
    setPasswordEdit(e.target.value);
  };

  const editingHandler = () => {
    onEdit({
      name: nameEdit,
      email: emailEdit,
      password: passwordEdit,
      id: id,
    });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <StyledConteinerEdit>
          <input type="text" value={nameEdit} onChange={nameValueHandler} />
          <input type="text" value={emailEdit} onChange={emailValueHandler} />
          <input
            type="text"
            value={passwordEdit}
            onChange={passwordValueHandler}
          />
          <ButtonAdd onClick={editingHandler}> save</ButtonAdd>
        </StyledConteinerEdit>
      ) : (
        <EditedList>
          <p completed={completed}>Name: {name}</p>
          <p completed={completed}>Email: {email}</p>
          <p completed={completed}>Password:{password}</p>
          <input
            onChange={() => handleToggleComplete(id)}
            type="checkbox"
            defaultChecked={completed}
          />
          <ButtonAdd onClick={() => handleDeleteTodo(id)}>delete</ButtonAdd>
          <ButtonAdd onClick={() => onEditingHandler(id)}> edit</ButtonAdd>
        </EditedList>
      )}
    </div>
  );
};

export default TodoItem;

const StyledConteinerEdit = styled.div`
  padding-top: 10px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  margin: auto;
  background-color: bisque;
  > input {
    width: 250px;
    height: 30px;
    border-radius: 4px;
  }
`;
const EditedList = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;

  p {
    font-size: 16px;
    color: #333;
    margin: 5px 0;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;
