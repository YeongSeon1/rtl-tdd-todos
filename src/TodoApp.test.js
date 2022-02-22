import { render } from '@testing-library/react';
import React from 'react';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
    it('renders TodoForm and TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp />);
        getByText('등록');
        getByTestId('TodoList');
    });
    
});
