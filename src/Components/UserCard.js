import * as React from 'react';
import Paper from '@mui/material/Paper';


const UserCard = () => {

  const[data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/users/getAll")
    .then(res => res.json())
    .then(result => setData(result))
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
