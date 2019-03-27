const initState = {
    loading: false,
};

const loadingReducer = (state = initState, action) => {
    switch(action.type) {
      case 'LOADING':
        return {
            ...state,
            loading: true
        }
      case 'FINISHED_LOAD':
        return {
            ...state,
            loading: false
        }    
      default:
        return state; 
    }
}

export default loadingReducer;