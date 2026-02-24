import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { AuthProvider } from '../context/AuthContext'

import Header from '../components/Header'
import { NotFound } from '../components/NotFound'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const hideHeaderRoutes = new Set(['/', '/login', '/signup'])
  const showDevtools =
    import.meta.env.DEV && import.meta.env.VITE_ENABLE_DEVTOOLS === 'true'

  return (
    <AuthProvider>
      {!hideHeaderRoutes.has(pathname) && <Header />}
      <Outlet />
      {showDevtools && (
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
    </AuthProvider>
  )
}
