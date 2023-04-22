import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./type";

const TODO_API_URL = "http://backend-container:5000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${TODO_API_URL}/todos`, { data });
    console.log(res);

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log(
      "Error happening when AddNewTodo API is calling",
      error.message
    );
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${TODO_API_URL}/todos`);
    console.log(res);

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log(
      "Error happening when getAllTodo API is calling ",
      error.message
    );
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${TODO_API_URL}/todos/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log(
      "Error happening when toggleTodo API is calling ",
      error.message
    );
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${TODO_API_URL}/todos/${id}`, { data });

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(
      "Error happening when updateTodo API is calling ",
      error.message
    );
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${TODO_API_URL}/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log(
      "Error happening when deleteTodo API is calling",
      error.message
    );
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
