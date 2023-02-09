import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sayHelloAction, getUsersAction, getOneUserInfo} from "../../redux/actions";

function UsersPage() {
    const dispatch = useDispatch()

    const {text} = useSelector(state => state.textReducer)
    const {users} = useSelector(state => state.usersReducer)
    const {user} = useSelector(state => state.usersReducer)

    return (
        <>



            <h1>{text}</h1>
            <button onClick={() => dispatch(sayHelloAction())}>hello after 3 sec</button>
            <button onClick={() => dispatch(getUsersAction())}>get users</button>
            <div style={{display: 'flex', width: '100%'}}>
            <ul>
                {
                    users.map(user => (
                        <li>
                            <p>name: {user.name}</p>
                            <p>email: {user.email}</p>
                            <p>website: {user.website}</p>
                            <p>companyName: {user.company.name}</p>
                            <button value={users.id} onClick={() => dispatch(getOneUserInfo(user.id))}>more info</button>
                            <p>-------------------------------------------------</p>
                        </li>
                    ))
                }
            </ul>

            <div>
                <h1>more info</h1>

                    <ul>
                    <li>name: {user.name}</li>
                    <li>email: {user.email}</li>
                    <li>username: {user.username}</li>
                    </ul>


            </div>
        </div>
        </>
    );
}

export default UsersPage;