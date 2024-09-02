import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        completed: false,
      };
      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, name, email, password } = action.payload;
      const todo = state.find((todo) => todo.id === id);

      if (todo) {
        todo.name = name;
        todo.password = password;
        todo.email = email;
      } else {
        console.error(`Todo with id ${id} not found.`);
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted, editTodo } =
  todoSlice.actions;
export default todoSlice;
