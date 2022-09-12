import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import get from "./CustomHooks/GET";
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import deleteUser from "./CustomHooks/DELETE";


const UserCard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    get("http://localhost:8080/users/getAll", setData)
  }, []);

  
  // const removeUser = (id) => {
  //   setData(current => current.filter(user => {return user.id !== id}));
  // }


  return (
    <>
      <h1>User info</h1>
      <Paper elevation={3}>
        {data.map(data => (
          <Paper key={data.id} variant="outlined" style={{width: 300, padding: 5, margin:5, marginLeft: 500}}>
            <p>user: {data.username}</p>
            <p>email: {data.email}</p>
            <Chip
              variant="outlined"
              componentsProps={{ action: { component: 'a', href: '#as-link' } }}
              color="danger"
              endDecorator={<ChipDelete variant="plain" 
              onClick={() => deleteUser(data.id)}
              />
            
            }
            >
              Delete
            </Chip>
          </Paper>
        ))}

      </Paper>
    </>
  );
}

export default UserCard;
