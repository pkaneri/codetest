import React from 'react'
import Listing from './Listing';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listingsAction } from '../store/actions/listingsAction';


const Listings = (props) => {  
  
let {listings} = props.listings;

// Using Hooks below might be a better method

// const [listings, setListings] = useState([])

// const fetchListings = async (url) => {
//     console.log("fetch Listings fired");
//      const res = await fetch(url);
//      const data = await res.json();

//      setListings(data.results);
//     setListings(listingsData.results);
//     console.log("fetchListings: " + listingsData.results)
//   }

//   useEffect(() => {
//     fetchListings('https://api.spork.digital/test/')
//   }, [])


if (listings) {

    return  <div className="listing-grid"> { listings.map(listing => { 
        return ( <Listing key={listing.uuid} data={listing}/>)
      })
    }
    </div>

} else {
    return (
        <div>
          Loading Listings...
        </div>
      )
    } 
  }

  Listings.propTypes = {
    listings: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    listingsAction: () => dispatch(listingsAction())
   })

export default connect(mapStateToProps, mapDispatchToProps)(Listings)
