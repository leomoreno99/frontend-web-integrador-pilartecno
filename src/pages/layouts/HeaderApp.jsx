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
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderApp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#f3f3f5', color: '#398290', boxShadow: '0px 0.2px 1px 1px rgba(0, 0, 0, 0.2)', position: 'fixed', left: 0, top: 0, zIndex: 100 }} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters style={{height: '100px'}} >
          <Button
            key= 'Reportes'
            onClick={()=>window.location.href = '/'}
            sx={{ my: 2, display: 'block', fontSize: '1.2rem' }}
            >PilarTecno
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key= 'Dashboard' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>

                <MenuItem key= 'Reportes' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Reportes</Typography>
                </MenuItem>

                <MenuItem key= 'Notas' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Notas</Typography>
                </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* <Button 
                key= 'Dashboard'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                Dashboard
              </Button>

              <Button
                key= 'Reportes'
                onClick={ handleCloseNavMenu }
                sx={{ my: 2, display: 'block' }}
              >
                Reportes
              </Button>

              <Button
                key= 'Notas'
                onClick={ handleCloseNavMenu }
                sx={{ my: 2, display: 'block' }}
              >
                Notas
              </Button> */}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <Button
                  variant='outlined'
                  key= 'Reportes'
                  onClick={()=> {
                    handleCloseNavMenu()
                    window.location.href = '/addPlace'
                  }}
                  sx={{ my: 2, display: 'block', borderRadius:' 50px' }}
                >Crear lugar
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderApp;
