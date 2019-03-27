import React from 'react';
import RoommateAvatar from './RoommateAvatar';

const Roommates = (props) => {

    const {roommates} = props;
  
    return (
    <div className="roommates-grid" >
      { roommates.map(roommate => 
        <RoommateAvatar key={roommate.uuid} roommate={roommate}/>
  )
  }
    </div>
  )
}

export default Roommates
