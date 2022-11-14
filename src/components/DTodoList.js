import Todo from "./CTodo"
const TodoList = ({ todoList, setTodoList }) => {
    return (
        <div>{todoList.map((todoItem) => (
            <Todo setTodoList={setTodoList}
                key={todoItem.id} todoItem={todoItem} todoList={todoList}></Todo>
        ))}</div>
    )
}

export default TodoList