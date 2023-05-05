import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

export default function RatingField({data}) {
  const [value, setValue] = React.useState(2);
  useEffect(()=>{
    setValue(data.rating);
  },[data.rating])
  return (
    
      
      <Rating
        name="simple-controlled"
        value={value}
        size="small"
        readOnly 
      />
     
    
  );
}