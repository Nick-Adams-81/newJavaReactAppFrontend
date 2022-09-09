import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const User = () => {


    const[username, setName] = React.useState("");
    const[email, setEmail] = React.useState("");

    const handleClick = () => {
        const user = {username, email};
        console.log(user);
        fetch("http://localhost:8080/users/save",{
        method:"POST",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(user)

        })
        .then(() => {
            console.log("new user added")
        })
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 10, width: '55ch', marginLeft: 50 },
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <Paper elevation={1} style={{padding: 10}}>
                    <h1 style={{color: "blue"}}>Add a User</h1>
                    <form>
                        <TextField 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined" 
                        style={{margin: 2}} 
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        style={{margin: 2}} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button variant="contained" color="secondary" onClick={() => handleClick()}>Save</Button>
                    </form>
                </Paper>

            </Container>


        </Box>
    );
}
export default User;
