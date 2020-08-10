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

	const handleChanges = (e) => {
		setCurrentTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: currentTodo });
		setCurrentTodo("");
	};

	const clearCompleted = (e) => {
		e.preventDefault();
		dispatch({ type: "CLEAR_COMPLETED" });
	};

	return (
		<div className="main-div">
			<h1>To Do List</h1>
			<AddTodo
				currentTodo={currentTodo}
				handleChanges={handleChanges}
				handleSubmit={handleSubmit}
				clearCompleted={clearCompleted}
			/>
			<Todos todos={state} toggleTask={toggleTask} />
		</div>
	);
}
