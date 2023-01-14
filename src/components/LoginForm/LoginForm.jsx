import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      {/* <h1>Залогіньтесь було б круто!</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" autoComplete="off" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Log In</button>
      </form> */}

      <Typography
        variant="h5"
        sx={{
          color: 'text.primary',
          mb: '15px',
        }}
      >
        Залогіньтесь було б круто!
      </Typography>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // '& .MuiTextField-root': { width: '50ch' },
          // ml: 'auto',
          // mr: 'auto',
          // width: 500,
          // maxWidth: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="off"
          sx={{
            display: 'block',
            mb: '15px',
            ml: 'auto',
            mr: 'auto',
          }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{
            display: 'block',
            mb: '15px',
            ml: 'auto',
            mr: 'auto',
          }}
        />
        {/* <button> */}
        <Button
          type="submit"
          variant="outlined"
          sx={{
            // maxWidth: '90px',
            ml: 'auto',
            mr: 'auto',
            display: 'block',
          }}
        >
          Register
        </Button>
        {/* </button>11 */}
      </Box>
    </>
  );
}
