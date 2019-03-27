import React from 'react';
import { render, cleanup, waitForElement} from 'react-testing-library';
import RoommateAvatar from '../RoommateAvatar';
import {MemoryRouter} from 'react-router-dom';

import 'jest-dom/extend-expect'

afterEach(() => {
    cleanup();
});

const roommate = { firstName: "Jennifer",
    profilePic: {
        cdnUrl: "https://via.placeholder.com/90x90.png",
        uuid: "58a5a9ea-e94f-4cc2-a264-c38b502d09ba",
    },
    uuid: "b4aa4867-87e8-4e38-ae91-e28e73b94263"
}

test('<RoommateAvatar />', async () => {
  
    const { getByTestId, queryByText, debug } = render(
        <MemoryRouter>
        <RoommateAvatar roommate={roommate} />
        </MemoryRouter>
        );
    await waitForElement(() => getByTestId('roommate-avatar-name'));
    expect(getByTestId('roommate-avatar-name').textContent).toBe(roommate.firstName);
    expect(getByTestId('roommate-avatar-image').getAttribute('src')).toBe(roommate.profilePic.cdnUrl);
});
