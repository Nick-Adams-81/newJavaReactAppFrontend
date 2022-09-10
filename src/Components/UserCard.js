import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import get from "./CustomHooks/GET";
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import deleteUser from "./CustomHooks/DELETE";


const UserCard = () => {

  const [data, setData] = React.useState([]);

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
          </h2>
        ))}

      </Paper>
    </>
  );
}

export default UserCard;
