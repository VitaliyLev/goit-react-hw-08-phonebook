import { Routes, Route } from 'react-router-dom';

import Header from './Header/header';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}
