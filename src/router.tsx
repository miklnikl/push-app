import { createRootRoute, createRoute, createRouter, Outlet, Link } from '@tanstack/react-router'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './pages/WorkoutPage'

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', textDecoration: 'none', borderRadius: '4px', color: '#333' }}>
          Home
        </Link>
        <Link to="/workout" style={{ padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', textDecoration: 'none', borderRadius: '4px', color: '#333' }}>
          Workout
        </Link>
      </nav>
      <div style={{ padding: '0 1rem' }}>
        <Outlet />
      </div>
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: MainPage,
})

const workoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workout',
  component: WorkoutPage,
})

const routeTree = rootRoute.addChildren([indexRoute, workoutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}