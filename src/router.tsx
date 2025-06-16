import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from './components/Layout'

// Create route objects from our routes configuration
const routeObjects = Object.values(routes).map(route => ({
  path: route.path,
  element: <route.component />,
}))

// Create the router with a layout wrapper
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routeObjects,
  }
])

/* 
// Example of protected routes with Clerk authentication
// To use this, uncomment and import the ClerkRouteProtection component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Public routes accessible to all users
      {
        index: true,
        element: <Home />,
      },
      
      // Protected routes - requires authentication
      {
        path: "dashboard",
        // Wrap protected routes with ClerkRouteProtection
        element: <ClerkRouteProtection requireAuth={true} />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      
      // Auth routes - accessible only to non-authenticated users
      {
        path: "sign-in",
        element: <ClerkRouteProtection requireAuth={false} />,
        children: [
          {
            index: true,
            element: <SignIn />,
          },
        ],
      },
    ],
  },
]);
*/

export { router } 