import { Outlet, Link } from 'react-router-dom';
import Notification from 'components/Notification/Notification';

export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#44014C',
          display: 'flex',
          padding: '10px 20px',
        }}
      >
        <Link to={'home'}>
          <button style={{ marginRight: '20px' }}>Home</button>
        </Link>
        <Link to={'registration'}>
          <button style={{ marginRight: '20px' }}>registration</button>
        </Link>
        <Link to={'login'}>
          <button style={{ marginRight: '20px' }}>logIn</button>
        </Link>
        <Link to={'contacts'}>
          <button style={{ marginRight: '20px' }}>Contacts</button>
        </Link>
      </div>

      <Notification />
      <Outlet />
    </>
  );
}
