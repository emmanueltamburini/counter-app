import React from "react";
import { render, screen } from "@testing-library/react"
import HelloWorldApp from '../src/HelloWorldApp';

describe('HelloWorldApp test', () => {
    const title = "Title";
    const name = "Emmanuel";
    const subTitle = 2;

    test('should be equal to snapshot', () => {
        const {container} = render(<HelloWorldApp name={name} title={title} subTitle={subTitle}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "Title"', () => {
        render(<HelloWorldApp name={name} title={title} subTitle={subTitle}/>);
        // screen.debug(); // To check  component
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should show an H1 element', () => {
        render(<HelloWorldApp name={name} title={title} subTitle={subTitle}/>);
        expect(screen.getByRole('heading', {level: 1})).toBeTruthy();
    });

    test('should show a subtitle sending by props', () => {
        render(<HelloWorldApp name={name} title={title} subTitle={subTitle}/>);
        expect(screen.getAllByText(subTitle+1).length).toBe(2);
    });
})