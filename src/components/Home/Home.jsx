import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h5" sx={{ color: 'text.primary' }}>
        тут привітальна сторінка , як у всіх нормальних людей
      </Typography>

      <Typography sx={{ color: 'text.primary' }}>
        Cтилі не були обовязковими, їх допишу обовязково
      </Typography>
    </>
  );
}
