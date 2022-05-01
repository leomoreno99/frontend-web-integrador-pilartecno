import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const PlaceImageList = ({images}) => {
    console.log(images)
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {images !== undefined && images.map((item) => {
        const cols = 2;
        const rows = 2;

        return (
          <ImageListItem key={item} cols={cols} rows={rows}>
            <img
              {...srcset(item, 250, 200, rows, cols)}
              alt='img_place'
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

