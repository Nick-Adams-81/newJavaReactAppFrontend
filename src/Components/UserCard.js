import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import get from "./CustomHooks/GET";


const UserCard = () => {

  const[data, setData] = React.useState([]);

  useEffect(() => {
    get("http://localhost:8080/users/getAll", setData)
  }, []);
  

  return (
    <>
      <h1>User info</h1>
      <Paper elevation={3}>
        {data.map(data => (
          <h2 key={data.id}>
            <p>user: {data.username}</p>
            <p>email: {data.email}</p>
          </h2>
        ))}

      </Paper>
    </>
  );
}

export default UserCard;
