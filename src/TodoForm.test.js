import React from 'react';
import { fireEvent, render } from '@testing-library/react'; // react-testing-library 이건 옛날 방식
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const {getByText, getByPlaceholderText} = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요~'); //input 있는지 없는지
        getByText('등록'); // button 버튼이 있는지
    });

    it('change input', () => {
        const {getByPlaceholderText} = render(<TodoForm />);
        const input = getByPlaceholderText('할 일을 입력하세요~');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}}); //value 대신에 id를 넣을 수도 있고 다른 것도 넣을 수 있다.
        expect(input).toHaveAttribute('value', 'TDD 배우기'); //value에 TDD 배우기가 있는지 검사
    });
    // 여기까지는 키보드로 입력했을 때 테스트

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert} />);
        const input = getByPlaceholderText('할 일을 입력하세요~');
        const button = getByText('등록');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });
    
    
});

