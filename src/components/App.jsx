import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

import Header from './HederLoyout/Header';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute restricted>
                <RegistrPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
