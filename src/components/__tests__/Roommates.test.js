import React from 'react';
import { render, cleanup, waitForElement} from 'react-testing-library';
import Roommates from '../Roommates';
import {MemoryRouter} from 'react-router-dom';

import 'jest-dom/extend-expect';

afterEach(() => {
    cleanup();
});

console.error = jest.fn();

const roommates = 
    [{
        firstName: "Jennifer",
        profilePic: {
            cdnUrl: "https://via.placeholder.com/90x90.png",
            uuid: "58a5a9ea-e94f-4cc2-a264-c38b502d09ba",
        },
        uuid: "b4aa4867-87e8-4e38-ae91-e28e73b94263"
    },
    {
        firstName: "Adam",
        profilePic: {
            cdnUrl: "https://via.placeholder.com/728x90.png",
            uuid: "58a5a9ea-e94f-4cc2-a264-c38b502d09bb",
        },
        uuid: "b4aa4867-87e8-4e38-ae91-e28e73b94264",
    }]
const samekeyroommates = 
[{
    firstName: "Jennifer",
    profilePic: {
        cdnUrl: "https://via.placeholder.com/90x90.png",
        uuid: "58a5a9ea-e94f-4cc2-a264-c38b502d09ba",
    },
    uuid: "b4aa4867-87e8-4e38-ae91-e28e73b94264"
},
{
    firstName: "Adam",
    profilePic: {
        cdnUrl: "https://via.placeholder.com/728x90.png",
        uuid: "58a5a9ea-e94f-4cc2-a264-c38b502d09bb",
    },
    uuid: "b4aa4867-87e8-4e38-ae91-e28e73b94264",
}]   
test('<Roommates />', async () => {
  
    const { getByTestId, queryByText, debug } = render(<MemoryRouter><Roommates roommates={roommates}/></MemoryRouter>);
    expect(console.error).not.toHaveBeenCalled();
});

test('<Roommates same key/>', async () => {
  
    const { getByTestId, queryByText, debug } = render(<MemoryRouter><Roommates roommates={samekeyroommates}/></MemoryRouter>);
    expect(console.error).toHaveBeenCalled();
});