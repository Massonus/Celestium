import React from 'react'; // Импорт React
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Импорт компонентов для работы с маршрутизацией
import Home from './components/Home'; // Импорт компонента Home
import AboutUs from './components/AboutUs'; // Импорт компонента AboutUs
import NavBar from './components/NavBar'; // Импорт компонента NavBar
import ContactUs from "./components/ContactUs"; // Импорт компонента CpntactUs

const App = () => {
    return (
        <Router>
            <NavBar/> {/* Навигационная панель */}
            <Routes>
                <Route path="/" element={<Home/>}/> {/* Маршрут для главной страницы */}
                <Route path="/about" element={<AboutUs/>}/> {/* Маршрут для страницы "О нас" */}
                <Route path="/contact" element={<ContactUs/>}/> {/* Маршрут для страницы "Контакты" */}
            </Routes>
        </Router>
    );
};

export default App; // Экспорт компонента App
