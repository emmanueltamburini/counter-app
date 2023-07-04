import React from "react";
import { render } from "@testing-library/react"
import HelloWorldApp from '../src/HelloWorldApp';

describe('HelloWorldApp test', () => {
    test('should be equal to snapshot', () => {
        const {container} = render(<HelloWorldApp name="Emmanuel" title="Title" subTitle={2}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show an H1 element', () => {
        const title = 'Title';
        const {container, getByText} = render(<HelloWorldApp name="Emmanuel" title={title} subTitle={2}/>);
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain(title);
    });
})