const initState = {
    listings: null,
    error: false
  }

const listingsReducer = (state = initState, action) => {

  switch (action.type) {
    case 'ADD_LISTINGS':
      return {...state,
              error: false,
              listings: action.listings};
    case 'LISTINGS_ERROR':
      return {...state,
              error: true}  ;
    default:
      return state;
  }
}

export default listingsReducer;
