import React, {useState} from 'react'; // Импорт React и хука useState
import {updateUser} from '../../api/api'; // Импорт функции updateUser из api.js
import './EditUser.css'; // Импорт стилей для компонента

// Компонент EditUser, принимает объект user и функцию onUpdate как пропсы
const EditUser = ({user, onUpdate}) => {
    const [name, setName] = useState(user.name); // Хук useState для управления состоянием name, начальное значение - имя пользователя

    const handleSubmit = async (event) => { // Функция для обработки события отправки формы
        event.preventDefault(); // Предотвращает перезагрузку страницы при отправке формы
        await updateUser(user.id, {name}); // Вызывает функцию updateUser для обновления данных пользователя
        onUpdate(); // Вызывает функцию onUpdate после обновления данных
    };

    return (
        <div className="edit-user-container">
            <h2>Edit User</h2>
            <form className="edit-user-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="edit-user-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Обновляет состояние name при изменении ввода
                />
                <button type="submit" className="edit-user-button">Update</button>
            </form>
        </div>
    );
};

export default EditUser; // Экспорт компонента EditUser
