import React from 'react'
import ListingMedia from './ListingMedia';
import ListingInfo from './ListingInfo';

const Listing = (props) => {

  const {data} = props;

  return (
     <div className='listing'>
     <ListingMedia featuredPhoto={data.featuredPhoto} photos={data.photos} roommates={data.roommates} /> 
     <ListingInfo area={data.area} transport={data.transport} rentPerMonth={data.rentPerMonth} roomTitle={data.roomTitle} /> 
    </div>
  )
}

export default Listing;
