import React, { useState, useEffect } from "react";
import styles from "./todolist.module.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.todo.value.trim();
    if (newTodo.length === 0) {
      alert("You should write something before adding, don't you?");
    }
    if (newTodo !== "" && todos.length !== 10) {
      setTodos([...todos, newTodo]);
    }
    if (todos.length === 10) {
      alert(
        "Stop adding To-Do's! think of the first item, how would it feel??"
      );
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleSaveTodo = (index, e) => {
    e.preventDefault();
    const newEditedTodo = e.target.elements.todo.value.trim();
    setTodos(todos.map((todo, i) => (i === index ? newEditedTodo : todo)));
    setEditingIndex(null);
    setIsEditing(false);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddTodo} className={styles.formContainer}>
        <div>
          <label> Add To-Do</label>
          <input type="text" name="todo" id="" />
          <button
            disabled={isEditing}
            className={isEditing ? styles.disabled : ""}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      <ul className={styles.listContainer}>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <form onSubmit={(e) => handleSaveTodo(index, e)}>
                <input type="text" defaultValue={todo} name="todo" />
                <button type="submit">Save</button>
                <button onClick={handleCancelEdit} type="text">
                  Cancel
                </button>
              </form>
            ) : (
              <>
                {todo}
                <div>
                  <button
                    disabled={isEditing}
                    className={isEditing ? styles.disabled : ""}
                    onClick={() => handleEditTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={isEditing ? styles.disabled : ""}
                    disabled={isEditing}
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
