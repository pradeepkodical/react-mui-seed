import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link } from '@mui/material';

export default function Copyright(props: any) {
  return (
    <Box sx={{ bgcolor: 'primary', p: 2 }}>
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' href='https://mui.com/'>
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
