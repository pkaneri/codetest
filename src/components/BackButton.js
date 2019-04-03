import React from 'react'

const BackButton = (props) => {

    const { onPress} = props;  
      return <div className={'back-button-container'}>
         <button data-testid="back-button" className="back-button" onClick={() => onPress()} >
            { "<" } 
         </button>
      </div> 
    
  }

export default BackButton

