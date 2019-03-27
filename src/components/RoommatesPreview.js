import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const RoommatesPreview = (props) => {

  const { roommates, onPress } = props;

  const [flex, setFlex] = useState('flex-end');

    return <RoomMatesGrid spacing={flex} onMouseLeave={() => { setFlex('flex-end'); }}> 
    { roommates.map(roommate => 
       
        <div key={roommate.uuid}>
            <RoomMate data-testid="roommate-preview" onClick={() => { onPress()}} onMouseEnter={() => { if (roommates.length > 1) {  setFlex('space-around'); } } } >
            <Image style={{borderStyle: 'solid', borderColor: 'white', borderWidth: '2px', width: '70px', marginRight: '10px' }} src={roommate.profilePic.cdnUrl} roundedCircle />
            </RoomMate>
        </div> 
      )
      }
      </RoomMatesGrid>
}

const RoomMatesGrid = styled.div`
  display: flex;
  text-align: center;
  justify-content: ${props => props.spacing || "flex-end"}
  margin-top: 20px;
  margin-right: 10px;
`;


const RoomMate = styled.div`
  margin-right: -30px;
`;

export default RoommatesPreview

