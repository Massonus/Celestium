import React, {useState, useEffect} from 'react'; // Импорт React и хуков useState и useEffect
import UserList from '../UserList'; // Импорт компонента UserList
import AddUser from '../AddUser'; // Импорт компонента AddUser
import EditUser from '../EditUser'; // Импорт компонента EditUser
import './Home.css'; // Импорт стилей для компонента
import {getUsers} from '../../api/api'; // Импорт функции getUsers из api.js

// Компонент Home
const Home = () => {
    const [editingUser, setEditingUser] = useState(null); // Хук useState для управления состоянием editingUser
    const [users, setUsers] = useState([]); // Хук useState для управления состоянием users, начальное значение пустой массив

    useEffect(() => { // Хук useEffect для выполнения кода после рендеринга компонента
        fetchUsers(); // Вызов функции fetchUsers при монтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз при монтировании компонента

    const fetchUsers = async () => { // Асинхронная функция для получения списка пользователей
        const usersData = await getUsers(); // Вызов функции getUsers для получения данных пользователей
        setUsers(usersData); // Обновление состояния users с полученными данными
    };

    const handleUserAdded = () => {
        fetchUsers(); // Обновление списка пользователей после добавления нового пользователя
    };

    const handleEdit = (user) => {
        setEditingUser(user); // Установка пользователя для редактирования
    };

    const handleUpdate = () => {
        setEditingUser(null); // Сброс состояния редактируемого пользователя
        fetchUsers(); // Обновление списка пользователей после редактирования
    };

    return (
        <div>
            <h1>My App</h1>
            <AddUser onUserAdded={handleUserAdded}/> {/* Компонент для добавления пользователя */}
            {editingUser ? (
                <EditUser user={editingUser} onUpdate={handleUpdate}/> /* Компонент для редактирования пользователя */
            ) : (
                <UserList users={users} onEdit={handleEdit}/> /* Компонент для отображения списка пользователей */
            )}
        </div>
    );
};

export default Home; // Экспорт компонента Home
