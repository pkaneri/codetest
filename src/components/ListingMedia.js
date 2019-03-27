import React, {useState} from 'react'
import RoommatesPreview from './RoommatesPreview';
import Roommates from './Roommates';
import {Link} from 'react-router-dom';
import BackButton from './BackButton';

function getFeaturedPhoto(featuredPhotoId, photos) {

    let photoUrl = photos[0].cdnUrl;

    photos.map(photo => {
      if (photo.uuid===featuredPhotoId) {
        photoUrl = photo.cdnUrl
      }
    })

    return photoUrl;

} 

const ListingMedia = (props) => {

    const { roommates } = props;

    console.log(roommates);

    const [roommateClicked, setRoommateClicked] = useState(false);

  function roommateClickListener() {
    setRoommateClicked(!roommateClicked)
  }  

  return ( <div className="listings-media-grid">

    {roommateClicked ?
    <>
      <div className="roommates-images">
        <Roommates roommates={roommates}/>
      </div>
      <BackButton onPress={roommateClickListener}/>
    </>
    :
    <>
    <Link className="listings-media-img" to={'/listings/test'}>
      <img src={getFeaturedPhoto(props.featuredPhoto, props.photos)} alt="Room" />  
    </Link>
    <div className="roommates-preview">
      <RoommatesPreview onPress={roommateClickListener} roommates={roommates}/>
    </div>
    </>
    }
  </div>
  )
}

export default ListingMedia