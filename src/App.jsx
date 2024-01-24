import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Banner from './components/Banner/Banner'
import Popular from './components/Popular/Popular'

import Articles from './components/Articles/Articles'

import CategoryArticles from './components/CategoryArticles/CategoryArticles'

import Main from './layouts/Main/Main';
//pages
import MainPage from './layouts/MainPage/MainPage';
import CoursePage from './layouts/CoursePage/CoursePage'
import { ListCoursePage } from './layouts/ListCoursePage/ListCoursePage'
function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/' ,
      element: <MainPage />
    },
    {
      path: '/CoursePage' ,
      element: <CoursePage/>
    },
    {
      path: '/ListCoursePage' ,
      element: <ListCoursePage/>
    },


  ])

  return (
    <>
      <Header />
      <Main>
      <RouterProvider router={router} />
      </Main>
      <Footer />
    </>
  )
}

export default App
