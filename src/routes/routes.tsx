import { createBrowserRouter } from 'react-router-dom'
import { QueryEditor } from '../pages/QueryEditor'
import { Performance } from '../pages/Performance'
import { Layout } from '../layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <QueryEditor />,
      },
      {
        path: 'performance',
        element: <Performance />,
      },
    ],
  },
]) 