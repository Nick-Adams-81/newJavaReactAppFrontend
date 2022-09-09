import React, { useState }from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import post from "./CustomHooks/POST"


const User = () => {


    const [username, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = () => {
        const user = { username, email };
        console.log(user);
        post("http://localhost:8080/users/save", user);

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
                <Paper elevation={1} style={{ padding: 10 }}>
                    <h1 style={{ color: "blue" }}>Add a User</h1>
                    <form>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            style={{ margin: 2 }}
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            style={{ margin: 2 }}
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
