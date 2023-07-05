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
        const subTitle = 2;
        const {container, getByText, getByTestId, getAllByText} = render(<HelloWorldApp name="Emmanuel" title={title} subTitle={subTitle}/>);
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
        expect(getByTestId('test-subTitle').innerHTML).toContain((subTitle + 1).toString());
        expect(getAllByText((subTitle + 1).toString()).length).toBe(2);


        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain(title);
    });


})