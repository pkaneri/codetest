import React from 'react';
import RoommateAvatar from './RoommateAvatar';
import BackButton from './BackButton';

const Roommates = (props) => {

    const {roommates, onPress} = props;
  
    return (
      <>
    <div className='roommates'>
      { roommates.map(roommate => 
        <RoommateAvatar key={roommate.uuid} roommate={roommate}/>
  )
  }  
    </div>
    <BackButton onPress={onPress}/>
  </>
  )
}

export default Roommates
