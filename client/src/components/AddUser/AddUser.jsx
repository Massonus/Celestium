import React, {useState} from 'react'; // Импорт React и хука useState
import {addUser} from '../../api/api'; // Импорт функции addUser из api.js
import './AddUser.css'; // Импорт стилей для компонента

// Компонент AddUser, принимает функцию onUserAdded как пропс
const AddUser = ({onUserAdded}) => {
    const [name, setName] = useState(''); // Хук useState для управления состоянием name, начальное значение пустая строка

    const handleSubmit = async (event) => { // Функция для обработки события отправки формы
        event.preventDefault(); // Предотвращает перезагрузку страницы при отправке формы
        const newUser = await addUser({name}); // Вызывает функцию addUser для добавления нового пользователя
        onUserAdded(newUser); // Вызывает функцию onUserAdded с новым пользователем
        setName(''); // Очищает поле ввода после добавления пользователя
        window.location.reload(); // Перезагружает страницу после добавления пользователя
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Обновляет состояние name при изменении ввода
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddUser; // Экспорт компонента AddUser
