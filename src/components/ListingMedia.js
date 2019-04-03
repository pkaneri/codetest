import React, {useState} from 'react'
import RoommatesPreview from './RoommatesPreview';
import Roommates from './Roommates';
import {Link} from 'react-router-dom';

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

    const [roommateClicked, setRoommateClicked] = useState(false);

    const [firstClick, setFirstClick] = useState(false);

    if (!firstClick) {
      if (roommateClicked) {
        setFirstClick(true);
      }
    }

  function roommateClickListener() {
    setRoommateClicked(!roommateClicked)
  }  

  return ( <div className='listing-media-container'>
    <div className="listing-media-grid">

    { firstClick ? 
    <>
    <div className={roommateClicked ? "roommates-images" : "roommates-images-exit"} >
      <Roommates onPress={roommateClickListener} roommates={roommates} />
    </div>
    <Link className={"listings-media-img"} to={'/listings/test'}>
      <img src={getFeaturedPhoto(props.featuredPhoto, props.photos)} alt="Room" />  
    </Link>
    <div className={"roommates-preview-container"}>
      <RoommatesPreview onPress={roommateClickListener} roommates={roommates}/>
    </div>
    </>
    : 
    <>
    <Link className="listings-media-img" to={'/listings/test'}>
    <img src={getFeaturedPhoto(props.featuredPhoto, props.photos)} alt="Room" />  
    </Link>
    <div className="roommates-preview-container">
    <RoommatesPreview onPress={roommateClickListener} roommates={roommates}/>
    </div>
    </>
    }
  </div>
  </div>
  )
}

export default ListingMedia