export const listingsAction = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOADING',
        })
        fetch('https://api.spork.digital/test/').then(response => 
            response.json()    
        ).then(data => data.results
        ).then((results) => {
            dispatch({
                type: 'ADD_LISTINGS',
                listings: results
            })
        }).then(() =>{
            dispatch({
                type: 'FINISHED_LOAD',
            })
        }).catch(err => {
            dispatch({
                type: 'LISTINGS_ERROR'
            })
        }).then(() => {
            dispatch({
                type: 'FINISHED_LOAD',
            })
        })
    }
};