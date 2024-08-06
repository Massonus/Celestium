import React from 'react'; // Импорт React
import './ContactUs.css'; // Импорт стилей для компонента

// Компонент ContactUs
const ContactUs = () => {
    return (
        <div className="contact-us-container"> {/* Контейнер для содержимого страницы "Свяжитесь с нами" */}
            <h1 className="contact-us-title">Contact Us</h1> {/* Заголовок страницы */}
            <p className="contact-us-text">This is the Contact Us page of our application.</p> {/* Описание страницы */}
        </div>
    );
};

export default ContactUs; // Экспорт компонента
