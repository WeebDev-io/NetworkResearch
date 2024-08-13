'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { configureAppStore } from './store';
// const ApiProv = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
//   useEffect(() => {
//     axios.get(`${apiUrl}/api/users`)
//       .then(response => setUsers(response.data)).catch(error => console.error(error));
//   }, []);

//   const [theme, setNewtheme] = useState(localStorage.getItem('currentTheme') || 'Dark');
//   const [serverTheme, setServerTheme] = useState('');
//   useEffect(() => {
//     const fetchThemeFromServer = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/api/theme`);
//         setServerTheme(response.data.theme);
//       } catch (error) {
//         console.error('Error fetching theme from server:', error);
//       }
//     };

//     fetchThemeFromServer();
//   }, []);

//   const sendThemeToServer = async () => {
//     try {
//       const response = await axios.post(`${apiUrl}/api/theme`, { theme: theme });
//       console.log('Server response:', response.data);
//       setServerTheme(response.data.theme);
//       localStorage.setItem('currentTheme', response.data.theme);
//     } catch (error) {
//       console.error('Error sending theme to server:', error);
//     }
//   };
//   const toggleTheme = () => {
//     const newTheme = theme === 'Dark' ? 'Light' : 'Dark';
//     setNewtheme(newTheme);
//     sendThemeToServer(newTheme);
//   };


//   return (<div>
//     <ul>
//       {users.map(user => (<li key={user.id}>{user.username}</li>))}
//     </ul>
//     <p>Current Theme: {theme}</p>
//     <button onClick={toggleTheme}>Dark</button>
//     <p>Server Theme: {serverTheme}</p>
//   </div>)
// }
export function Providers({ children, initialState }) {
  const store = configureAppStore(initialState);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}