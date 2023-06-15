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
        Welcome to the best To-Do List app you've ever seen! <br />
        -Pretty intuitive and easy to use <br />
        -No tutorial needed at all<br></br>
        -Upto 10 To-Do's, i won't contribute to your procrastination
      </div>
      <div className="containerApp">
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
