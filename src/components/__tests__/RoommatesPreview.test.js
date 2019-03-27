import React from 'react';
import { render, debug, cleanup, fireEvent } from 'react-testing-library';
import RoomMatesPreview from '../RoommatesPreview';

afterEach(cleanup);

const onSubmit = jest.fn();

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
test("<RoomMatesPreview/>", () => {
    const {debug, getByTestId} = render(<RoomMatesPreview roommates={roommates} onPress={onSubmit}/>)
    const roommatePreview = getByTestId('roommate-preview');
    fireEvent.click(roommatePreview);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
    // debug();
})