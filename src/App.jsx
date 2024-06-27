import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <><Navbar /><News key="general" pageSize={50} country="in" category="general" /></> },
    { path: "/business", element: <><Navbar /><News key="business" pageSize={50} country="in" category="business" /></> },
    { path: "/entertainment", element: <><Navbar /><News key="entertainment" pageSize={50} country="in" category="entertainment" /></> },
    { path: "/health", element: <><Navbar /><News key="health" pageSize={50} country="in" category="health" /></> },
    { path: "/science", element: <><Navbar /><News key="science" pageSize={50} country="in" category="science" /></> },
    { path: "/sports", element: <><Navbar /><News key="sports" pageSize={50} country="in" category="sports" /></> },
    { path: "/technology", element: <><Navbar /><News key="technology" pageSize={50} country="in" category="technology" /></> },
  ])

  return (
    <RouterProvider router={router} />
  )
}
export default App
