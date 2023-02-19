import {useDispatch} from "react-redux";
import {deleteTodo, changeStatus} from "../../store/todosSlice";

export function Todo({todoInfo}) {


    const dispatch = useDispatch();

    const changeStatusFn = (event) => {
        const todo = {
            id: todoInfo.id,
            status: event.target.checked
        }

        dispatch(changeStatus(todo))
    }

    return (
        <div style={{marginTop: '15px'}}>
            <input type="checkbox" onChange={changeStatusFn}/>
            <span
                style={
                    {
                        display: 'inline-block',
                        marginRight: '10px',
                        marginLeft: '10px'
                    }
                }>

                {
                    todoInfo.status
                        ?
                        <s>{todoInfo.title}</s>
                        :
                        <span>{todoInfo.title}</span>
                }

            </span>
            <button onClick={() => dispatch(deleteTodo(todoInfo.id))}>удалить</button>
        </div>
    )
} 