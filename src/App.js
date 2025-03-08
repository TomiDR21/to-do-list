import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todolist";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <div className={`welcomeMessage ${loaded ? "active" : ""}`}>
        Welcome to the most complex To-Do List app you've ever seen. <br />
        -Pretty counter-intuitive and difficult to use. <br />
        -Upto 10 To-Do's, avoid procrastination.
      </div>
      <div className="containerApp">
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
