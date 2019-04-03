import React from 'react'
import overgroundIcon from '../icons/overground-icon.svg';
import undergroundIcon from '../icons/underground-icon.svg';
import walkingIcon from '../icons/walk-icon--black.svg';
import VertDivider from './VertDivider';

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
    <div className='listing-info' data-testid="listing-info">
      <span style={{verticalAlign: 'middle'}}>
      <b data-testid="rent-per-month">£{rentPerMonth}</b>
      &nbsp;
      &nbsp;
      <VertDivider/>
      &nbsp;
      &nbsp;
      <b data-testid="room-title">{roomTitle}</b>
      </span>
      <br />
      <span style={{verticalAlign: 'middle'}}>
        {area} 
        &nbsp;
        &nbsp;
        <VertDivider/>
        &nbsp;
        &nbsp;
        <img src={walkingIcon} alt="Walking Icon" />
        &nbsp;
        &nbsp;
        {transport.distance.time}
        &nbsp;
        &nbsp;
        {transportIcon(transport.type)}
        &nbsp;
        &nbsp;
        {transport.name}
        </span>
    </div>
  )
}

export default ListingInfo