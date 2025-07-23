import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './pages/WorkoutPage'

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <button onClick={() => window.location.href = '/'} style={{ marginRight: '1rem' }}>
          Home
        </button>
        <button onClick={() => window.location.href = '/workout'}>
          Workout
        </button>
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