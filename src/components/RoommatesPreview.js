import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const RoommatesPreview = (props) => {

  const { roommates, onPress } = props;

  const [marginRight, setMarginRight] = useState('-50px')

    return <RoomMatesGrid marginRight={marginRight} onMouseLeave={() => { setMarginRight('-50px'); }}> 
    { roommates.map((roommate, index) => {

        if (index === roommates.length - 1)  {
          return ( <div key={roommate.uuid}>
            <RoomMateBase marginRight={marginRight} data-testid="roommate-preview" onClick={() => { onPress()}} onMouseEnter={() => { if (roommates.length > 1) {  setMarginRight('10px'); } } } >
            <Image style={{borderStyle: 'solid', borderColor: 'white', borderWidth: '2px', width: '100px', marginRight: '10px' }} src={roommate.profilePic.cdnUrl} roundedCircle />
            </RoomMateBase>
          </div> )
        } else {
          return ( <div key={roommate.uuid}>
            <RoomMate marginRight={marginRight} data-testid="roommate-preview" onClick={() => { onPress()}} onMouseEnter={() => { if (roommates.length > 1) {  setMarginRight('10px'); } } } >
            <Image style={{borderStyle: 'solid', borderColor: 'white', borderWidth: '2px', width: '100px', marginRight: '10px' }} src={roommate.profilePic.cdnUrl} roundedCircle />
            </RoomMate>
          </div> )
        }
    }
      )
      }
      </RoomMatesGrid>
}

const RoomMatesGrid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const RoomMateBase = styled.div`
  transition: margin-right 300ms ease-in-out 0.5ms;
`;

const RoomMate = styled.div`
  transition: margin-right 300ms ease-in-out 0.5ms;
  margin-right: ${props => props.marginRight || "-50px"};
`;

export default RoommatesPreview

