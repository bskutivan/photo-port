import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    //baseline test
    it('renders', () => {
        render(
            <ContactForm></ContactForm>
        )
    });

    it('matches snapshit', () => {
        const { asFragment } = render(
            <ContactForm></ContactForm>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Contact form has "contact me" and "submit"', () => {
    it('contact me prints and submit button present', () => {
        const { getByTestId } = render(
            <ContactForm></ContactForm>
        );

        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('subbutton')).toHaveTextContent('Submit');
    });
});