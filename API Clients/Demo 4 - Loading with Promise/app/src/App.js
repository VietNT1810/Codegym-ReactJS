import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => { setUsers(res.data); })
      .finally(() => { setLoading(false); })
  }, [])

  // const getUsers = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       axios.get('http://localhost:3001/api/user/list')
  //         .then((res) => { resolve(res) })
  //         .catch((err) => { reject(err) })
  //     }, 3000)
  //   })
  // }
  

  const getUsers = async () => {
    await new Promise(resolve => { setTimeout(resolve, 3000) })
    return await axios.get('http://localhost:3001/api/user/list')
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      {console.log(loading)}
      {console.log(users)}
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
