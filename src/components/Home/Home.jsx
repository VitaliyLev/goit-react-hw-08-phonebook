import { Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import Button from '@mui/material/Button';

export default function Home() {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const asdsad = {
  //     name: form.elements.name.value,
  //     email: form.elements.email.value,
  //     password: form.elements.password.value,
  //   };
  //   console.log(asdsad);

  //   // dispatch(
  //   //   register({
  //   //     name: form.elements.name.value,
  //   //     email: form.elements.email.value,
  //   //     password: form.elements.password.value,
  //   //   })
  //   // );
  //   // form.reset();
  // };

  return (
    <>
      <Typography variant="h5" sx={{ color: 'text.primary' }}>
        тут привітальна сторінка , як у всіх нормальних людей
      </Typography>

      <Typography sx={{ color: 'text.primary' }}>
        Cтилі не були обовязковими, їх допишу обовязково
      </Typography>
      {/* 
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
          name="name"
          label="Name"
          type="text"
          autoComplete="off"
          sx={{
            display: 'block',
            mb: '15px',
            ml: 'auto',
            mr: 'auto',
          }}
        />
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

      </Box> */}
    </>
  );
}
