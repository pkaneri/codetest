import React from 'react';
import { render, cleanup, waitForElement} from 'react-testing-library';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import Listings from '../Listings';
import rootReducer from '../../store/reducers/rootReducer';
import {MemoryRouter} from 'react-router-dom';

afterEach(() => {
    cleanup();
});

function renderWithRedux(
    ui,
    {initialState, store = createStore(rootReducer, initialState)} = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
  }

console.error = jest.fn();

const listingsData = {"status":200,"date":"2019-03-25T16:54:07","resultsPerPage":10,"page":1,"title":"Rooms","numberOfResults":4,"results":[{"roomTitle":"Double room in cosy flat!","rentPerMonth":1200,"area":"Wood Green","uuid":"91006820-8d5a-4111-b73e-03f4cb2f0fb1","transport":{"name":"Wood Green Underground Station","distance":{"time":"3 mins","type":"walk"},"type":"underground"},"featuredPhoto":"b17ff177-9ae7-4e3a-8e7a-72063da66bfd","photos":[{"uuid":"b17ff177-9ae7-4e3a-8e7a-72063da66bfd","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/bedroom-1.jpg"},{"uuid":"f929fd40-071e-41fe-a63a-4e706a1bb847","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/room-1.jpg"}],"roommates":[{"firstName":"Christopher","profilePic":{"uuid":"2229f875-c1b9-4a87-8617-16410b6e2cb8","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/1-a.jpg"},"uuid":"c13a2a1c-9bc0-4a8c-b314-bf4f38073027"},{"firstName":"Giles","profilePic":{"uuid":"08cb980a-39e8-4a0f-901c-06a3eeb7cd0d","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/1-b.jpg"},"uuid":"1375fbe1-f0bd-4ccf-ac7c-4924486d7d87"},{"firstName":"Phil","profilePic":{"uuid":"c5e31789-91e3-4161-b86a-132b6621b728","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/1-c.jpg"},"uuid":"79e09af2-5154-4e5f-8929-1bb10663daa9"}]},{"roomTitle":"Party flat in Dalston!","rentPerMonth":800,"area":"Dalston","uuid":"52a83477-f21a-4071-a090-1e9c42cc951f","transport":{"name":"Dalston Junction Overground Station","distance":{"time":"10 mins","type":"walk"},"type":"overground"},"featuredPhoto":"b707678c-a990-45a6-8abc-99b8580c47d4","photos":[{"uuid":"b707678c-a990-45a6-8abc-99b8580c47d4","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/bedroom-2.jpg"},{"uuid":"d37bf629-cff9-430f-ae0a-396fb8f352ed","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/room-2.jpg"}],"roommates":[{"firstName":"Jennifer","profilePic":{"uuid":"58a5a9ea-e94f-4cc2-a264-c38b502d09ba","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/2-a.jpg"},"uuid":"19489bc1-e19e-4926-b3ba-dbbe6453a8f4"},{"firstName":"Otillia","profilePic":{"uuid":"980a7eaf-b987-4fa6-aebe-662993a47101","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/2-b.jpg"},"uuid":"6eb9bd87-cf0a-4ec8-bb42-64e23e54a405"}]},{"roomTitle":"Quiet room with garden view","rentPerMonth":650,"area":"Bethnal Green","uuid":"758ae7a4-a618-4eac-962e-5750944c9577","transport":{"name":"Bethnal Green Underground Station","distance":{"time":"5 mins","type":"walk"},"type":"underground"},"featuredPhoto":"01c7ef44-dedd-4b63-968b-968a60681ec3","photos":[{"uuid":"01c7ef44-dedd-4b63-968b-968a60681ec3","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/bedroom-3.jpg"},{"uuid":"0a7ed680-d6f4-4f7e-8209-483afc8bfa0f","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/room-3.jpg"}],"roommates":[{"firstName":"Mike","profilePic":{"uuid":"04f14cdd-b5ea-4afa-b4bc-2db7b662864e","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/3-a.jpg"},"uuid":"b4aa4867-87e8-4e38-ae91-e28e73b94264"},{"firstName":"Brian","profilePic":{"uuid":"0b0506a1-3f48-465c-a693-739162b6aad2","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/3-b.jpg"},"uuid":"b9ec7ffc-a9db-4f08-ab78-57b78d60daba"},{"firstName":"Lauren","profilePic":{"uuid":"3d598dd6-ba56-4837-bdd9-44dbbd77ba5f","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/3-c.jpg"},"uuid":"0e736eb9-2079-443c-bbe4-51f1ad637d3b"},{"firstName":"Joesi","profilePic":{"uuid":"b5a78095-00ed-425b-bd33-9e516f26c8dc","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/3-d.jpg"},"uuid":"e60d3368-3774-4c4c-875e-ab7f91c034ba"}]},{"roomTitle":"Cosy room in small flat","rentPerMonth":450,"area":"Stoke Newington","uuid":"76acdbbf-ab33-4635-8233-f44dc96d1dcf","transport":{"name":"Stoke Newington Overground Station","distance":{"time":"15 mins","type":"walk"},"type":"overground"},"featuredPhoto":"4eeab18a-7de7-4bf6-9dec-6f599389216c","photos":[{"uuid":"4eeab18a-7de7-4bf6-9dec-6f599389216c","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/bedroom-4.jpg"},{"uuid":"be581b21-d424-42fa-83f4-873fcd50fee8","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/room-4.jpg"}],"roommates":[{"firstName":"Wendy","profilePic":{"uuid":"08ad5cd2-ac11-4ea3-b13d-599ba7dd9d83","cdnUrl":"https:\/\/api.spork.digital\/static\/rooms-test\/4-a.jpg"},"uuid":"534dedc5-00b2-4c18-b35f-80a40c89898a"}]}]}

test('<Listings />', async () => {
  
    const { getByTestId, queryByText, debug } = renderWithRedux(<MemoryRouter><Listings listings={listingsData.results}/></MemoryRouter>);
    expect(console.error).not.toHaveBeenCalled();
});




