import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from '@tanstack/react-router'

export function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Push App
        </Typography>
        <Box>
          <Button color='inherit' component={RouterLink} to='/'>
            Home
          </Button>
          <Button color='inherit' component={RouterLink} to='/workout'>
            Workout
          </Button>
          <Button color='inherit' component={RouterLink} to='/progress'>
            Progress
          </Button>
          <Button color='inherit' component={RouterLink} to='/leaderboard'>
            Leaderboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}