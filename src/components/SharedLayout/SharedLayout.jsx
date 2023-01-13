import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Notification from 'components/Notification/Notification';
import Header from 'components/HeaderLoyout/Header';

import Container from '@mui/material/Container';

export default function SharedLayout() {
  return (
    <>
      {/* <Container maxWidth="sm,'sm','md','lg','xl'"> */}
      <Header />
      {/* <Container maxWidth="lg" fixed sx={{ bgcolor: 'background.default' }}> */}
      <Container maxWidth="lg" fixed>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <Notification />
        </Suspense>
      </Container>
    </>
  );
}
