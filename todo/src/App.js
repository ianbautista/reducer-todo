import React, { useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default function App() {
	const [currentTodo, setCurrentTodo] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleTask = (todoId) => {
		dispatch({ type: "TOGGLE_COMPLETED", payload: todoId });
	};

	const handleChanges = (evt) => {
		setCurrentTodo(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch({ type: "ADD_TODO", payload: currentTodo });
		setCurrentTodo("");
	};

	return (
		<div className="App">
			<h1>To Do List</h1>
			<AddTodo handleChanges={handleChanges} handleSubmit={handleSubmit} />
			<Todos todos={state} toggleTask={toggleTask} />
		</div>
	);
}
