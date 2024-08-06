import React from 'react'; // Импорт React
import './AboutUs.css'; // Импорт стилей для компонента

// Компонент AboutUs
const AboutUs = () => {
    return (
        <div className="about-us-container"> {/* Контейнер для содержимого страницы "О нас" */}
            <h1 className="about-us-title">About Us</h1> {/* Заголовок страницы */}
            <p className="about-us-text">This is the About Us page of our application.</p> {/* Описание страницы */}
        </div>
    );
};

export default AboutUs; // Экспорт компонента
