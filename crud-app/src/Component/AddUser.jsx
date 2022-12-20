import react, { useState } from 'react';
import {Alert, FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';



const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

  
const initialValue = {
    Firstname: '',
    Lastname: '',
    gender:'',
    email: '',
    phone: '',
    password:'',
    confpassword:''
}


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();}

    const [user, setUser] = useState(initialValue);
    const { Firstname, Lastname, gender, email , phone, password, confpassword } = user;
    const [error, seterror] = useState(false);
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        if (user.password.length !=0){
            if( user.password == user.confpassword){
                seterror(false);
                await addUser(user);
                navigate('/all');
            }else{
            seterror(true);
            }
        }
    }

    return (
        <Container>
            <Typography color='#1C315E' variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Firstname' value={Firstname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Lastname' value={Lastname} id="my-input" />
            </FormControl>
            <FormControl>
             <FormLabel  id="my-input">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-customized-radios"
                       name="gender">
                        <FormControlLabel onChange={(e) => onValueChange(e)} id="my-input" name='gender' value="female" control={<BpRadio />} label="Female"  aria-describedby="my-helper-text" />
                        <FormControlLabel onChange={(e) => onValueChange(e)}  id="my-input" name='gender' value="male" control={<BpRadio />} label="Male"  aria-describedby="my-helper-text"/>
                        <FormControlLabel onChange={(e) => onValueChange(e)}  id="my-input" name='gender' value="other" control={<BpRadio />} label="Other" aria-describedby="my-helper-text"/>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm your password</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='confpassword' value={confpassword} id="my-input"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            {error && <Alert severity="error">Password not match</Alert>}
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;