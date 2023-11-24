import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import{ HomeLayout, Landing, Register , Login, DashBoard, Error, AddJob, AllJobs, Profile, Admin, Stats,} from './pages';


const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme' , isDarkTheme);
  return isDarkTheme; 
}
const isDarkThemeEnable = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <DashBoard isDarkThemeEnable={isDarkThemeEnable} />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: 'stats', element: <Stats /> },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ]
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
