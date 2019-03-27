import React from 'react';
import Image from 'react-bootstrap/Image';
import StyledLink from './StyledLink';

const RoommateAvatar = (props) => {

  const { roommate } = props;

  return (
  <div style={{textAlign: 'center', margin: '20px'}}>
        <StyledLink to={'/profile/test'}>
         <Image data-testid="roommate-avatar-image" className="roommate-avatar" style={{borderStyle: 'solid', borderWidth: '2px', borderColor:'white', width: '140px', height: '140px'}} src={roommate.profilePic.cdnUrl} roundedCircle></Image>
        <span className="roommate-name" >
            <b data-testid="roommate-avatar-name">{roommate.firstName}</b>
        </span>
        </ StyledLink>
    </div>
  )
}

export default RoommateAvatar
