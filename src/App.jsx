import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.scss'
import './scss/general.scss'

import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Main from './layouts/Main/Main';
import Error from './layouts/Error/Error'

//pages
import MainPage from './layouts/MainPage/MainPage';
import CoursePage from './layouts/CoursePage/CoursePage'
import ListCoursePage  from './layouts/ListCoursePage/ListCoursePage';
import InfoBlockSection from "./components/InfoBlockSection/InfoBlockSection.jsx";
import ListArticles from './layouts/ListArticles/ListArticles'

function App() {
    return (
        <Router>
            <>
                <Header />
                <Main>
                    <Routes>
                        <Route path="https://fs2s-eight.vercel.app/" element={<MainPage/>}/>
                        <Route path="https://fs2s-eight.vercel.app/course/:id" element={<CoursePage/>}/>
                        <Route path="https://www.udemy.com/:url" element={<CoursePage/>}/>
                        <Route path="https://fs2s-eight.vercel.app/courseList/:value" element={<ListCoursePage/>}/>
                        <Route path="https://fs2s-eight.vercel.app/courseList/:page" element={<ListCoursePage/>}/>
                        <Route path="https://fs2s-eight.vercel.app/courseList/:value/course/:id" element={<CoursePage/>}/>
                        <Route path="https://www.udemy.com/:url" element={<InfoBlockSection/>}/>
                        <Route path="/article" element={<ListArticles/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </Main>
                <Footer />
            </>
        </Router>
    )
}

export default App