import React, {useState} from 'react';
import Todo from "./Todo";
import {observer} from "mobx-react";

const TodoList = observer((props) => {
    const [title, setTitle] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        props.store.addTodo(title);
        setTitle('');
    }

    const titleChange = (event) => {
        setTitle(event.target.value);
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                New Todo:
                <input type="text" value={title} onChange={titleChange}/>
            </form>

            <ul>
                {props.store.todos.map(t => (<Todo todo={t} key={t.id}/>))}
            </ul>
            Task left: {props.store.unfinishedTodoCount}
        </div>
    );
})

export default TodoList;
