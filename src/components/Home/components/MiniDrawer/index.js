import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import DrawerContent from '../DrawerContent';
import './index.css'

const SHOW_CONTAINER = 'mini-drawer-show-container'
const EXPAND_CONTAINER = 'mini-drawer-expand-container'
const HIDE_CONTAINER = 'mini-drawer-hide-container'

const NORMAL_WIDTH = 180
const MOBILE_WIDTH = 1500


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
  const { isOpen, setIsOpen, isMobile, setIsMobile, isBig, isSmall } = props

  const className = useState(isBig ? SHOW_CONTAINER : HIDE_CONTAINER)
  const [containerClassName, setContainerClassName] = useState(className);
  const [drawerWidth, setDrawerWidth] = useState(isMobile ? MOBILE_WIDTH : NORMAL_WIDTH);

  console.log(drawerWidth)

  const handleOpendAndClose = useCallback(() => {
    setIsOpen(!isOpen)
    setIsMobile(false)
  }, [isOpen, setIsOpen, setIsMobile])

  useEffect(() => {
    const changeClassName = () => {
      let newClassName;
      if (isBig) {
        newClassName = SHOW_CONTAINER
      }
      else if (isSmall && isOpen) {
        newClassName = EXPAND_CONTAINER
      }
      else {
        newClassName = HIDE_CONTAINER
      }
      setContainerClassName(newClassName)
    }

    if (isMobile) setDrawerWidth(MOBILE_WIDTH);
    changeClassName()

  }, [isBig, setContainerClassName, isMobile, isSmall, isOpen, drawerWidth, setDrawerWidth]);

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
