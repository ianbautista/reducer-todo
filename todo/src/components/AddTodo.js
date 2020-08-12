import React from "react";

export default function AddTodo(props) {
	return (
		<div className="add-todo">
			<input
				type="text"
				name="currentTodo"
				value={props.currentTodo}
				onChange={props.handleChanges}
				placeholder="add to do.."
			/>
			<br />
			<button type="submit" onClick={props.handleSubmit}>
				<i className="fas fa-plus-square"></i>
			</button>
		</div>
	);
}
