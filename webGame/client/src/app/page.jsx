"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/page';

// import { initializeI18n } from './utils/i18n';
// initializeI18n();

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     // Fetch users from the server
//     axios.get('http://localhost:5000/api/users')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map(user => ( <li key={user.id}>{user.username}</li> ))}
//       </ul>
//     </div>
//   );
// };
const Main = () => {
  return (<Home/>)
}

export default Main;

