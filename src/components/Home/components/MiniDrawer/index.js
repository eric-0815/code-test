import React, { useCallback, useEffect, useState } from 'react';
import useMedia from 'use-media';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import DrawerContent from '../DrawerContent';
import './index.css'

const openedMixin = (theme, drawerWidth) => ({
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
  ({ theme, isOpen, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(isOpen && {
      ...openedMixin(theme, drawerWidth),
      '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
    }),
    ...(!isOpen && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme, drawerWidth),
    }),
  }),
);

const MiniDrawer = (props) => {
  const { isOpen, setIsOpen, isMobile, setIsMobile } = props

  const isBig = useMedia({ minWidth: '1300px' });
  const isSmall = useMedia({ maxWidth: '1300px' });
  const className = useState(isBig ? 'mini-drawer-big-container' : 'mini-drawer-small-container')
  const [containerClassName, setContainerClassName] = useState(className);

  const drawerWidth = isMobile ? 500 : 180;
  const handleOpendAndClose = useCallback(() => {
    // setIsOpen(!isOpen)
    setIsOpen(!isOpen)
    setIsMobile(false)
  }, [isOpen, setIsOpen, setIsMobile])

  useEffect(() => {
    const shouldShow = () => {
      if (isBig) return true
      if (isSmall && isOpen) return true
      return false
    }
    console.log('isOpen: ', isOpen)
    console.log(shouldShow())
    const newClassName = shouldShow() ? 'mini-drawer-big-container' : 'mini-drawer-small-container'
    console.log(newClassName)
    setContainerClassName(newClassName)


  }, [isBig, setContainerClassName, isMobile, isSmall]);

  return (
    <div className={containerClassName}>
      <Drawer variant="permanent" isOpen={isOpen} drawerWidth={drawerWidth} style={{ background: 'black' }}>
        <DrawerHeader>
          <IconButton onClick={handleOpendAndClose} >
            <KeyboardArrowDownIcon className='mini-drawer-arrow-down-icon' />
          </IconButton>
          {isOpen && <div>PLAY</div>}
        </DrawerHeader>
        <DrawerContent open={isOpen} />
      </Drawer>
    </div>
  );
}

export default MiniDrawer;
