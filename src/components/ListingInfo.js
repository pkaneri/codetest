import React from 'react'
import overgroundIcon from '../icons/overground-icon.svg';
import undergroundIcon from '../icons/underground-icon.svg';
import walkingIcon from '../icons/walk-icon--black.svg';

const transportIcon = (type) => {

  switch (type) {
    case "underground":
    return <img src={undergroundIcon} alt="Underground Icon" />;     
     
    case "overground":
    return <img src={overgroundIcon} alt="Overground Icon" />;     
 
    default:
    return <img src={undergroundIcon} alt="Underground Icon" />;     

  }

}

const ListingInfo = (props) => {

  const {area, transport, rentPerMonth, roomTitle}  = props; 
  // console.log(props);

  return (
    <div data-testid="listing-info" style={{display: 'block', textAlign:'left', marginTop:'15px'}}>
      <p ><b data-testid="rent-per-month">£{rentPerMonth}</b>
      {"   |   "}
      <b data-testid="room-title">{roomTitle}</b>
      <br />
        {area} {"   |   "}
        {" "} <img src={walkingIcon} alt="Walking Icon" />
        <span>{" "}</span>
        {transport.distance.time}
        {" "}
        {transportIcon(transport.type)}
        {" "}
        {transport.name}
        </p>
    </div>
  )
}

export default ListingInfo