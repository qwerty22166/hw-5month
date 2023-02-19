import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "../../components/todo/Todo";
import {addTodo} from "../../store/todosSlice";


export default function TodosPage() {
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.todosReducer)


    const addTodoFn = () => {
        dispatch(addTodo(todoValue))
        setTodoValue('')
    }

    return (
        <>
            <input
                type="text"
                placeholder="todo"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
            />
            <button onClick={addTodoFn}>add</button>

            {
                todos.length > 0
                    ?
                    todos.map(todo => <Todo todoInfo={todo} key={todo.id}/>)
                    :
                    <p>задач нет</p>

            }
        </>
    )
}