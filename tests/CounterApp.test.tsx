import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from '../src/CounterApp';

describe('CounterApp test', () => {
    const initialValue = 100;
    test('should be equal to snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the value "initialValue"', () => {
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString());
    });

    test('should increment with +1 button', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('should decrement with +1 button', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('should reset button works', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button', {name: 'btn-add'}));
        fireEvent.click(screen.getByRole('button', {name: 'btn-add'}));
        fireEvent.click(screen.getByRole('button', {name: 'btn-subtract'}));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
})