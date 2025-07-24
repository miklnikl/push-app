import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Paper,
  Box
} from '@mui/material'

export function MainPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Push App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Main Page
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Welcome to the Push App main page!
          </Typography>
          <Box mt={2}>
            <Typography>
              Start tracking your pushup workouts and progress!
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  )
}