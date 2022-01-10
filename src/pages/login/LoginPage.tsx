import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Box
      display='flex'
      alignContent={'center'}
      justifyContent={'center'}
      flex='1'
    >
      <Paper elevation={6} sx={{ m: 5, p: 5, maxWidth: 400 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h5' textAlign={'center'}>
              My App
            </Typography>
            <Typography variant='subtitle1' textAlign={'center'}>
              Welcome back
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label='Username' variant='standard' />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant='standard' fullWidth>
              <InputLabel htmlFor='standard-adornment-password'>
                Password
              </InputLabel>
              <Input
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(`${e.target.value}`)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography textAlign={'center'}>Don't have an account?</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
