import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import listingsReducer from './listingsReducer';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
    listings: listingsReducer,
    loading: loadingReducer,
    simpleReducer: simpleReducer
})

export default rootReducer;