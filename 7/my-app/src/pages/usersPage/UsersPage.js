import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOneUserInfo, getUsers} from "../../store/usersSlice";
import "../../App.css"

function UsersPage(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const {users, user} = useSelector(state => state.usersReducer)

    return (
        <div>
                <h1 className="list">Users list</h1>
            <ul className="user">
                    <li>name: {user.name}</li>
                    <li>website: {user.website}</li>
                    <li>email: {user.email}</li>
            </ul>

            <ul>
                {users.map(user => <li key={user.id}>
                    <p>{user.name}</p>
                    <button value={user.id} onClick={() => dispatch(getOneUserInfo(user.id))} className="button">more info</button>
                    <br/>
                </li>)}
            </ul>

        </div>
    );
}

export default UsersPage;