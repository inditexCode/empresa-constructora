import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'MUY MAL',
  1: 'MUY MAL',
  1.5: 'MALO',
  2: 'MALO',
  2.5: 'BIEN',
  3: 'BIEN',
  3.5: 'MUY BIEN',
  4: 'MUY BIEN',
  4.5: 'EXCELENTE',
  5: 'EXCELENTE',
};

export default function TextRating({ ratingValue }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={ratingValue}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[ratingValue]}</Box>
    </Box>
  );
}
