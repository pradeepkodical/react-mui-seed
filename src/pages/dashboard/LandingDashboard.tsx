import { Box, Paper } from '@mui/material';

export default function LandingDashboard() {
  return (
    <Box
      display='flex'
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={'#eee'}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (x: number, index: number) => (
          <Paper key={index} sx={{ m: 1, minWidth: 250, p: 3 }} elevation={3}>
            <Box sx={{ p: 3 }}>Hello</Box>
          </Paper>
        )
      )}
    </Box>
  );
}
