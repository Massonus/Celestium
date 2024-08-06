import axios from 'axios'; // Импорт библиотеки axios для выполнения HTTP-запросов
import {API_URL} from '../config'; // Импорт базового URL API из конфигурации

// Функция для получения всех пользователей
export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users/`); // Выполнение GET-запроса к /users
    return response.data; // Возврат данных из ответа
};

// Функция для добавления нового пользователя
export const addUser = async (user) => {
    const response = await axios.post(`${API_URL}/users/`, user); // Выполнение POST-запроса к /users
    return response.data; // Возврат данных из ответа
};

// Функция для обновления данных пользователя
export const updateUser = async (userId, user) => {
    const response = await axios.put(`${API_URL}/users/${userId}/`, user); // Выполнение PUT-запроса к /users/:id
    return response.data; // Возврат данных из ответа
};

// Функция для удаления пользователя
export const deleteUser = async (userId) => {
    await axios.delete(`${API_URL}/users/${userId}/`); // Выполнение DELETE-запроса к /users/:id
};
