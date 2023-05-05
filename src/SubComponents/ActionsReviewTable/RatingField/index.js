import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

export default function RatingField({params}) {
  const [value, setValue] = React.useState(2);
  useEffect(()=>{
    setValue(params.row.rating);
  },[params.row.rating])
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
        name="simple-controlled"
        value={value}
        size="small"
        readOnly 
      />
     
    </Box>
  );
}