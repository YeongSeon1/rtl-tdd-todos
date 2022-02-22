import React, { useCallback, useState } from 'react';

const TodoForm = ({onInsert}) => {

    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e =>{
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='할 일을 입력하세요~' value = {value} onChange = {onChange} /> {/* 파란색 value는 HTML 속성이고 {} 안에 value는 useState에 있는 value이다. */}
                <button type='submit'>등록</button>
            </form>
        </div>
    );
}

export default TodoForm;