import { fireEvent, render } from '@testing-library/react';
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
        return {...utils, span, button}; // utils는 화면 전체를 말한다. 
    }

    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('does not show line-through on span when done is fales', () => {
        const {span} = setup({todo: {...sampleTodo, done: false}});
        expect(span).not.toHaveStyle('test-decoration: line-through;');
    });
    
    it('calls onToggle', () => {
        const onToggle = jest.fn();
        const {span} = setup({onToggle});
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sampleTodo.id);
    });
    
    it('calls onRemove', () => {
        const onRemove = jest.fn();
        const {button} = setup({onRemove});
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    });
    
});






















