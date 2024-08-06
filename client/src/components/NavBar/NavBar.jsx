import React from 'react'; // Импорт React
import {Link} from 'react-router-dom'; // Импорт компонента Link для создания ссылок
import './NavBar.css'; // Импорт стилей для компонента

// Компонент NavBar
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link> {/* Ссылка на главную страницу */}
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link> {/* Ссылка на страницу "О нас" */}
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link> {/* Ссылка на страницу "Контакты" */}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar; // Экспорт компонента NavBar
