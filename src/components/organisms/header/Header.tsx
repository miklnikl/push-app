import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from '@tanstack/react-router'
import { NAVIGATION } from '../../../modules/common/navigation'

export function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          {NAVIGATION.APP_NAME}
        </Typography>
        <Box>
          <Button color='inherit' component={RouterLink} to={NAVIGATION.ROUTES.HOME}>
            {NAVIGATION.LINKS.HOME}
          </Button>
          <Button color='inherit' component={RouterLink} to={NAVIGATION.ROUTES.WORKOUT}>
            {NAVIGATION.LINKS.WORKOUT}
          </Button>
          <Button color='inherit' component={RouterLink} to={NAVIGATION.ROUTES.PROGRESS}>
            {NAVIGATION.LINKS.PROGRESS}
          </Button>
          <Button color='inherit' component={RouterLink} to={NAVIGATION.ROUTES.LEADERBOARD}>
            {NAVIGATION.LINKS.LEADERBOARD}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}