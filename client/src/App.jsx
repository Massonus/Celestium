import React from 'react'; // Импорт React
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Импорт компонентов для работы с маршрутизацией
import Home from './components/Home'; // Импорт компонента Home
import AboutUs from './components/AboutUs'; // Импорт компонента AboutUs
import NavBar from './components/NavBar'; // Импорт компонента NavBar
import ContactUs from './components/ContactUs'; // Импорт компонента ContactUs
import ArticleList from './components/ArticleList/ArticleList'; // Импорт компонента ArticleList
import Login from './components/Login/Login';
import SignUp from "./components/SignUp/SignUp";

const App = () => {
    const currentPath = window.location.pathname;

    const shouldShowNavBar = !(currentPath === '/login' || currentPath === '/signup')

    return (
        <Router>
            {shouldShowNavBar && <NavBar/>} {/* Навигационная панель */}
            <Routes>
                <Route path="/" element={<Home/>}/> {/* Маршрут для главной страницы */}
                <Route path="/about" element={<AboutUs/>}/> {/* Маршрут для страницы "О нас" */}
                <Route path="/contact" element={<ContactUs/>}/> {/* Маршрут для страницы "Контакты" */}
                <Route path="/articles" element={<ArticleList />} /> {/* Маршрут для страницы со списком статей */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App; // Экспорт компонента App
