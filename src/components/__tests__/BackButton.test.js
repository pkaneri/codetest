import React from 'react';
import { render, debug, cleanup, fireEvent } from 'react-testing-library';
import BackButton from '../BackButton';

afterEach(cleanup);

const onSubmit = jest.fn();

test("<Button/>", () => {
    const {debug, getByTestId} = render(<BackButton onPress={onSubmit}/>)
    const backButton = getByTestId('back-button');
    fireEvent.click(backButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    // debug();
})