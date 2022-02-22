import React from 'react';
import { fireEvent, render } from '@testing-library/react'; // react-testing-library 이건 옛날 방식
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {

    //중복된 부분을 함수로 빼는중 => 리팩토링
    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props}/>);
        const {getByText, getByPlaceholderText} = utils;
        const input = getByPlaceholderText('할 일을 입력하세요~'); //TodoForm에 있는 input이랑 같아야 한다.
        const button = getByText('등록'); //TodoForm에 있는 button이랑 같아야 한다.

        return {...utils, input, button}; // utils는 화면 전체를 말한다. 
    }

    it('has input and a button', () => {
        const {input, button} = setup();
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('change input', () => {
        const {input} = setup();
        fireEvent.change(input, {target: {value: 'TDD 배우기'}}); //value 대신에 id를 넣을 수도 있고 다른 것도 넣을 수 있다.
        expect(input).toHaveAttribute('value', 'TDD 배우기'); //value에 TDD 배우기가 있는지 검사
    });
    // 여기까지는 키보드로 입력했을 때 테스트

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const {input, button} = setup({onInsert});
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });
});

