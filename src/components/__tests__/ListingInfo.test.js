import React from 'react';
import { render, cleanup, waitForElement} from 'react-testing-library';
import ListingInfo from '../ListingInfo';

import 'jest-dom/extend-expect'

afterEach(() => {
    cleanup();
});

const area = "Wood Green";
const rentPerMonth = 1200;
const roomTitle = "Double Room in cosy flat!";
const transport = {
    distance: {
        time: "3 mins",
        type: "walk"
    },
    name: "Wood Green Underground Station",
    type: "underground",
}

test('<ListingInfo />', async () => {
  
    const { getByTestId, queryByText, debug } = render(<ListingInfo area={area} rentPerMonth={rentPerMonth} roomTitle={roomTitle} transport={transport} />);
    await waitForElement(() => getByTestId('room-title'));
    expect(getByTestId('room-title').textContent).toBe(roomTitle);
    expect(getByTestId('rent-per-month').textContent).toBe("£" + rentPerMonth);
    expect(getByTestId('listing-info')).toHaveTextContent(area);
    expect(getByTestId('listing-info')).toHaveTextContent(transport.distance.time);
    // debug();
});
