import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.scss'

import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Main from './layouts/Main/Main';
import Error from './layouts/Error/Error'

//pages
import MainPage from './layouts/MainPage/MainPage';
import CoursePage from './layouts/CoursePage/CoursePage'
import { ListCoursePage } from './layouts/ListCoursePage/ListCoursePage';
import InfoBlockSection from "./components/InfoBlockSection/InfoBlockSection.jsx";

function App() {
    return (
        <Router>
            <>
                <Header />
                <Main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/course/:id" element={<CoursePage/>}/>
                        <Route path="https://www.udemy.com/:url" element={<CoursePage/>}/>
                        <Route path="/courseList" element={<ListCoursePage/>}/>
                        <Route path="https://www.udemy.com/:url" element={<InfoBlockSection/>}/>
                        <Route path="/error" element={<Error/>}/>
                    </Routes>
                </Main>
                <Footer />
            </>
        </Router>
    )
}

export default App