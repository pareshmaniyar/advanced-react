import React from 'react';

function Image({ image, imageClicked }) {
    return (
        <img key={image.id} src={image.urls.small} onClick={imageClicked}/>
    )
}

function areEqual(prevProps, nextProps) {
    return prevProps.image.id == nextProps.image.id
}

export default React.memo(Image, areEqual);
