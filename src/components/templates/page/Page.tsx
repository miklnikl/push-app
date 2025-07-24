import { Container, Paper } from '@mui/material'
import { Header } from '../../organisms/header/Header'

type PageProps = {
  children: React.ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Header />
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          sx={{
            width: '100%',
            maxWidth: 600,
            p: 3,
            mx: 'auto',
          }}
        >
          {children}
        </Paper>
      </Container>
    </div>
  )
}