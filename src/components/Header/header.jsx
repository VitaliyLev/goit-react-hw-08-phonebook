import { Outlet, Link } from 'react-router-dom';
import Notification from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Suspense } from 'react';
import { selectIsLoggedIn, selectUserEmail } from 'redux/auth/selectors';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);
  return (
    <header>
      <div
        style={{
          backgroundColor: '#44014C',
          display: 'flex',
          padding: '10px 20px',
        }}
      >
        {isLoggedIn ? (
          <>
            <Link to={'/'}>
              <button style={{ marginRight: '20px' }}>Home</button>
            </Link>
            <Link to={'contacts'}>
              <button style={{ marginRight: '20px' }}>Contacts</button>
            </Link>
            <div
              style={{
                display: 'flex',
                color: '#fff',
                margin: '0px',
              }}
            >
              <Link>
                <button
                  style={{ marginRight: '20px' }}
                  onClick={() => dispatch(logOut())}
                >
                  logOut
                </button>
              </Link>
              <p
                style={{
                  margin: '0px',
                }}
              >
                {userEmail}
              </p>
            </div>
          </>
        ) : (
          <>
            <Link to={'/'}>
              <button style={{ marginRight: '20px' }}>Home</button>
            </Link>
            <Link to={'registration'}>
              <button style={{ marginRight: '20px' }}>registration</button>
            </Link>
            <Link to={'login'}>
              <button style={{ marginRight: '20px' }}>logIn</button>
            </Link>
          </>
        )}
      </div>
      <Notification />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
}
