import { useState } from 'react'
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
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main>
         <MainPage />
        {/*<CoursePage/>*/}

      </Main>
      <Footer />
    </>
  )
}

export default App
