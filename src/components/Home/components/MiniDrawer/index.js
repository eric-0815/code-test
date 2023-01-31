import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import DrawerContent from '../DrawerContent';
import './index.css'

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer = (props) => {
  const [open, setOpen] = useState(false)

  const boxClassName = '' // isMobile ? '' : 'mini-drawer-container'
  const handleDrawerOpenAndClose = () => {
    setOpen(!open);
  };
  return (
    <Box className={boxClassName} >
      <CssBaseline />
      <Drawer variant="permanent" open={open} style={{ background: 'black' }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpenAndClose} >
            <KeyboardArrowDownIcon className='mini-drawer-arrow-down-icon' />
          </IconButton>
          {open && <div>PLAY</div>}
        </DrawerHeader>
        <DrawerContent open={open} />
      </Drawer>
    </Box >
  );
}

export default MiniDrawer;
