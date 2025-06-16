import { 
  createRootRoute,
  createRoute, 
  createRouter, 
  Outlet
} from '@tanstack/react-router'
import { rootAuthLoader } from '@clerk/react-router/ssr.server'
import { routes } from './routes'
import { Layout } from './components/Layout'

// Root route with layout with Clerk auth loader
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),

  
  // Adapt the Clerk rootAuthLoader to TanStack Router's expected format
  loader: async (ctx) => {
    // We need to pass a compatible object to rootAuthLoader
    const loaderArgs = {
      request: new Request(ctx.location.href),
      params: ctx.params,
      context: ctx.context
    };
    
    // Call the Clerk rootAuthLoader with the proper arguments
    return await rootAuthLoader(loaderArgs);
  },
})

// Create route objects from our routes configuration
const routeObjects = Object.values(routes).map(route => 
  createRoute({
    getParentRoute: () => rootRoute,
    path: route.path,
    component: route.component,
  })
)

// Create the route tree
const routeTree = rootRoute.addChildren(routeObjects)

// Create the router
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// Type declarations for routes
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router } 