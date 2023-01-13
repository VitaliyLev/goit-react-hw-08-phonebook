import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

import ThemeButton from 'components/ThemeButton/ThemeBnt';
// import Button from '@mui/material/Button';

// export default function Header() {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const userData = useSelector(selectUserData);

//   return (
//     <header>
//       <div
//         style={{
//           backgroundColor: '#44014C',
//           display: 'flex',
//           padding: '10px 20px',
//         }}
//       >
//         {isLoggedIn ? (
//           <>
//             <Link to={'/'}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 style={{ marginRight: '20px' }}
//               >
//                 Home
//               </Button>
//             </Link>
//             <Link to={'contacts'}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 style={{ marginRight: '20px' }}
//               >
//                 Contacts
//               </Button>
//             </Link>
//             <div
//               style={{
//                 display: 'flex',
//                 color: '#fff',
//                 margin: '0px',
//               }}
//             >
//               <Link to={'login'}>
//                 <Button
//                   variant="contained"
//                   size="small"
//                   style={{ marginRight: '20px' }}
//                   onClick={() => dispatch(logOut())}
//                 >
//                   logOut
//                 </Button>
//               </Link>
//               <p
//                 style={{
//                   margin: '0px',
//                 }}
//               >
//                 {userData.email}
//               </p>
//             </div>
//           </>
//         ) : (
//           <>
//             <Link to={'/'}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 style={{ marginRight: '20px' }}
//               >
//                 Home
//               </Button>
//             </Link>
//             <Link to={'registration'}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 style={{ marginRight: '20px' }}
//               >
//                 Registration
//               </Button>
//             </Link>
//             <Link to={'login'}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 style={{ marginRight: '20px' }}
//               >
//                 logIn
//               </Button>
//             </Link>
//           </>
//         )}
//         <ThemeButton />
//       </div>
//     </header>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg" fixed>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              <Link to={'/'}>
                <MenuItem>
                  <Typography
                    onClick={handleCloseNavMenu}
                    textAlign="center"
                    sx={{ color: 'text.primary' }}
                  >
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              {isLoggedIn ? (
                <Link to={'contacts'}>
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      sx={{ color: 'text.primary' }}
                      onClick={handleCloseNavMenu}
                    >
                      Contacts
                    </Typography>
                  </MenuItem>
                </Link>
              ) : (
                <Box>
                  <Link to={'registration'}>
                    <MenuItem>
                      <Typography
                        textAlign="center"
                        sx={{ color: 'text.primary' }}
                        onClick={handleCloseNavMenu}
                      >
                        Registration
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link to={'login'}>
                    <MenuItem>
                      <Typography
                        textAlign="center"
                        sx={{ color: 'text.primary' }}
                        onClick={handleCloseNavMenu}
                      >
                        logIn
                      </Typography>
                    </MenuItem>
                  </Link>
                </Box>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            <Link to={'/'}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                HOME
              </Button>
            </Link>

            {isLoggedIn ? (
              <Link to={'contacts'}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  CONTACTS
                </Button>
              </Link>
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Link to={'registration'}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    REGISTRATION
                  </Button>
                </Link>
                <Link to={'login'}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    LOGIN
                  </Button>
                </Link>
              </Box>
            )}
          </Box>

          <ThemeButton />
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userData.name}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography
                    onClick={handleCloseUserMenu}
                    textAlign="center"
                    sx={{ color: 'text.primary' }}
                  >
                    {userData.email}
                  </Typography>
                </MenuItem>

                <Link to={'login'}>
                  <MenuItem>
                    <Typography
                      onClick={() => dispatch(logOut())}
                      textAlign="center"
                      sx={{ color: 'text.primary' }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          )}

          {!isLoggedIn && (
            <Box sx={{ display: 'flex' }}>
              <AdbIcon
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
