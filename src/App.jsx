import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Banner from './components/Banner/Banner';
import Popular from './components/Popular/Popular';

import Articles from './components/Articles/Articles';

import CategoryArticles from './components/CategoryArticles/CategoryArticles';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Popular />
        <CategoryArticles title="Категорії курсів" btnName="Більше курсів"/>
        <Articles/>
        <CategoryArticles title="Категорії статей" btnName="Більше статей"/>
      </main>



      <Footer />
    </>
  )
}

export default App
