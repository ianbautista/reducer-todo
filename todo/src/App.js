import React, { useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer";
import Todos from "./components/Todos";

export default function App() {
	const [currentTodo, setCurrentTodo] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleTask = (todoId) => {
		dispatch({ type: "TOGGLE_COMPLETED", payload: todoId });
	};

	return (
		<div className="App">
			<h1>My To Do List</h1>
			<Todos todos={state} toggleTask={toggleTask} />
		</div>
	);
}
