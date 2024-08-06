import React, {useEffect, useState} from 'react'; // Импорт React и хуков useEffect и useState
import {getUsers, deleteUser} from '../../api/api'; // Импорт функций getUsers и deleteUser из api.js
import './UserList.css'; // Импорт стилей для компонента

// Компонент UserList, принимает функцию onEdit как пропс
const UserList = ({onEdit}) => {
    const [users, setUsers] = useState([]); // Хук useState для управления состоянием users, начальное значение пустой массив

    useEffect(() => { // Хук useEffect для выполнения кода после рендеринга компонента
        fetchUsers(); // Вызов функции fetchUsers при монтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз при монтировании компонента

    const fetchUsers = async () => { // Асинхронная функция для получения списка пользователей
        const usersData = await getUsers(); // Вызов функции getUsers для получения данных пользователей
        setUsers(usersData); // Обновление состояния users с полученными данными
    };

    const handleDelete = async (userId) => { // Функция для удаления пользователя
        await deleteUser(userId); // Вызов функции deleteUser для удаления пользователя
        fetchUsers(); // Обновление списка пользователей после удаления
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="user-list-item">
                        {user.name}
                        <button className="user-list-button" onClick={() => onEdit(user)}>Edit</button>
                        {/* Кнопка для редактирования пользователя */}
                        <button className="user-list-button" onClick={() => handleDelete(user.id)}>Delete</button>
                        {/* Кнопка для удаления пользователя */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList; // Экспорт компонента UserList
