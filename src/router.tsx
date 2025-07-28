import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { MainPage } from './pages/MainPage'
import { WorkoutPage } from './pages/WorkoutPage'
import { Page } from './components/templates/page/Page'

const rootRoute = createRootRoute({
  component: () => (
    <Page>
      <Outlet />
    </Page>
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