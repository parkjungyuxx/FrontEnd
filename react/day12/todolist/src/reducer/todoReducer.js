import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    getTodosState: {
      loading: false,
      done: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.getTodosState.loading = true;
        state.getTodosState.done = false;
        state.getTodosState.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.getTodosState.loading = false;
        state.getTodosState.done = true;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.getTodosState.loading = false;
        state.getTodosState.done = true;
        state.getTodosState.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get("/api/todo/list");
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const response = await axios.post("/api/todo", { text });
  return response.data;
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, updates }) => {
    const response = await axios.patch(`/api/todo/${id}`, updates);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`/api/todo/${id}`);
  return id;
});

export default todoSlice.reducer;
