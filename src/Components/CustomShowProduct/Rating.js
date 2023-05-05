import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

export default function RatingItem({nb}) {
  const [value, setValue] = React.useState(2);
  useEffect(()=>{
    setValue(nb);
  },[nb])
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
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </Box>
  );
}