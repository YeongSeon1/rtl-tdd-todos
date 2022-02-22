import React from 'react';

const TodoItem = () => {
    return (
        <li>
            <span>{text}</span>
            <button>삭제</button>
        </li>
    );
}

export default TodoItem;