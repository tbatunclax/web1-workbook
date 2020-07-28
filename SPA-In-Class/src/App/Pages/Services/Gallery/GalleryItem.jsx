import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({item}) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
            <img src={ item.image } alt ={ item.title }/>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
       
`;