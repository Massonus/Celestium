import React from 'react'; // Импорт React
import ReactDOM from 'react-dom/client'; // Импорт методов для работы с DOM
import './index.css'; // Импорт глобальных стилей
import App from './App'; // Импорт главного компонента приложения

const root = ReactDOM.createRoot(document.getElementById('root')); // Создание корневого элемента
root.render(
    <React.StrictMode>
        <App/> {/* Рендер главного компонента приложения */}
    </React.StrictMode>
);
