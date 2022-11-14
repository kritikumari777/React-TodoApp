import Header from "./components/AHeader";
import Form from "./components/BForm"
import { useState } from "react"
import TodoList from "./components/DTodoList";
function App() {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])



  return (
    <div className="App">
      <Header></Header>
      <Form todo={todo} setTodo={setTodo}
        todoList={todoList} setTodoList={setTodoList}>
      </Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
