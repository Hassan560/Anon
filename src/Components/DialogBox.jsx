import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ManLogo from '../assets/Images/man.png';
import styled from '@emotion/styled';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '../assets/Images/image.png';
import { useDispatch } from 'react-redux';
import { google, facebook, login, register } from '../redux/actions/userAction'

// material styling
const BootstrapDialog = styled(Dialog)(() => ({
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
        maxWidth: '1000px',
    },
}));

export default function DialogBox({ dialogOpen, setDialogOpen }) {
    const dispatch = useDispatch()

    // login form
    const [useremail, setUseremail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // register form 
    const [user, setUser] = React.useState({
        email: "",
        userPassword: ""
    })

    const handleRegisterChange = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    // password show and hide
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // check if login true show login form otherwise show register form
    const [loginForm, setLoginForm] = React.useState(true);


    const handleClose = () => {
        setDialogOpen(false);
    };

    // login form
    const handleUsernameChange = (event) => {
        setUseremail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(useremail, password))
        setUseremail('')
        setPassword('')
    };

    // google 
    const googleLogin = () => {
        dispatch(google())
        setDialogOpen(false)
    }

    //facebook 
    const facebookLogin = () => {
        dispatch(facebook())
        setDialogOpen(false)
    }

    const handleClickRegister = (event) => {
        event.preventDefault()
        dispatch(register(user.email, user.userPassword))
        setUser({
            email: '',
            userPassword: ''
        })
    }
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={dialogOpen}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '850px'
            }}>
                {
                    loginForm ? (
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20,
                                width: '340px',
                                padding: '10px 30px',
                                overflow: 'hidden'
                            }}>
                                <img src={Logo} alt="logo" style={{ width: '200px', alignSelf: 'center' }} />
                                <TextField
                                    sx={{
                                        "& .MuiInputLabel-root": { color: '#12225c' },
                                        "& .MuiOutlinedInput-root.Mui-focused": {
                                            "& > fieldset": {
                                                borderColor: "#12225c"
                                            }
                                        }
                                    }}
                                    fullWidth
                                    label="Email"
                                    value={useremail}
                                    required
                                    onChange={handleUsernameChange} />
                                <FormControl fullWidth variant="outlined" sx={{
                                    "& .MuiInputLabel-root": { color: "#12225c" },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            borderColor: "#12225c"
                                        }
                                    }
                                }}>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        required
                                        onChange={handlePasswordChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <div style={{ display: 'flex', gap: 3 }}>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        type='submit'
                                        style={{ backgroundColor: '#12225c' }}>
                                        Log In
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant='outlined'
                                        style={{ border: '1px solid #12225c', color: '#12225c' }}
                                        onClick={() => setLoginForm(false)}>
                                        Create Account
                                    </Button>
                                </div>

                                <p style={{ textAlign: 'center', margin: '0px', fontSize: '12px' }}>Or Sign In With</p>

                                <div style={{ display: 'flex', gap: 3 }}>
                                    <Button
                                        fullWidth
                                        variant='outlined'
                                        style={{ border: '1px solid #FA4335', color: '#FA4335' }}
                                        startIcon={< GoogleIcon />}
                                        onClick={googleLogin}>
                                        Google
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        style={{ backgroundColor: '#3B5998' }}
                                        startIcon={<FacebookIcon />}
                                        onClick={facebookLogin}>
                                        Facebook
                                    </Button>
                                </div>
                            </div>
                        </form>
                    ) : <form onSubmit={handleClickRegister} autoComplete='off'>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                            width: '340px',
                            padding: '10px 30px',
                            overflow: 'hidden'
                        }}>
                            <h2 style={{ margin: '0px', color: '#12225c' }}>Register Now</h2>
                            <TextField sx={{
                                "& .MuiInputLabel-root": { color: "#12225c" },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#12225c"
                                    }
                                }
                            }}
                                fullWidth
                                label="Email"
                                value={user.email}
                                name="email"
                                required
                                onChange={handleRegisterChange} />
                            <FormControl fullWidth variant="outlined" sx={{
                                "& .MuiInputLabel-root": { color: "#12225c" },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#12225c"
                                    }
                                }
                            }}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={user.userPassword}
                                    name="userPassword"
                                    required
                                    onChange={handleRegisterChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Button
                                fullWidth
                                variant='contained'
                                type='submit'
                                style={{ backgroundColor: '#12225c' }} >
                                Register
                            </Button>
                            <p style={{ fontSize: '12px', textAlign: 'center' }}>Already have an account? <span style={{
                                fontWeight: 700,
                                color: '#12225c',
                                cursor: 'pointer',
                                fontSize: '13px'
                            }} onClick={() => setLoginForm(true)}>Log In</span></p>
                        </div>
                    </form>
                }
                <div style={{ backgroundColor: '#12225c' }}>
                    <img src={ManLogo} alt="manlogo" style={{ width: '450px' }} />
                </div>
            </div >
        </BootstrapDialog>
    );
}