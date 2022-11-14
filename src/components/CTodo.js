import styles from "../style.module.css"
const Todo = ({ todoItem, todoList, setTodoList }) => {

    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id)) // checking with current id
    }
    return <div>
        <div className={styles.todoname}>
            <h4 className={styles.todoitem}>{todoItem.name}</h4>
            <button onClick={deleteTodo} className={styles.tododone} type="submit">delet</button>

        </div>
    </div>
}
export default Todo