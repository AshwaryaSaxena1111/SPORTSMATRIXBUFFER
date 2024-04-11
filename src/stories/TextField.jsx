import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch', alignItems:'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
      <TextField id="outlined-name" label="Player First Name" variant="outlined"/>
      </Box>
      <Box>
      <TextField id="outlined-name" label="Player Last Name" variant="outlined"/>
      </Box>
      <Box>
      <TextField id="outlined-password" label="Player Email" variant="outlined" type="email"/>
      </Box>
      <Box>
      <TextField id="outlined-phone" label="Player Phone Number" variant="outlined" type="number"/>
      </Box>
      <Box>
      <TextField id="outlined-phone"  label="Password" variant="outlined" type="password"/>
      </Box>
       <Box>
      <TextField id="outlined-phone" label="Profile Video Link" variant="outlined" />
      </Box>
    </Box>
  );
}