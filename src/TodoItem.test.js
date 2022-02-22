import { render } from '@testing-library/react';
import React from 'react';
import TodoItem from './TodoItem';


describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TDD 배우기',
        done: false
    };

    const setup = (props = {}) => {
        const initialProps = {todo: sampleTodo};
        const utils = render(<TodoItem {...initialProps} {...props}/>);
        const {getByText} = utils;
        const todo = props.todo || initialProps.todo;
        const button = getByText('삭제'); //TodoForm에 있는 button이랑 같아야 한다.
        const span = getByText(todo.text);
        return {...utils, input, button}; // utils는 화면 전체를 말한다. 
    }

    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
    
});






















