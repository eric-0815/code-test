import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemText from '@mui/material/ListItemText';

const DrawerContent = ({ openMenu }) => {
    return (
        <div>
            <List>
                {['Search', 'Home', 'Trending', 'Web Series', 'Movies'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: openMenu ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: openMenu ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index === 0 && (<SearchIcon />)}
                                {index === 1 && (<HomeIcon />)}
                                {index === 2 && (<TrendingUpIcon />)}
                                {index === 3 && (<PhotoCameraFrontIcon />)}
                                {index === 4 && (<MovieIcon />)}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: openMenu ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className='mini-drawer-user-container'>
                <div className='mini-drawer-user-icon'></div>
                {openMenu && <div>User</div>}
            </div>
            <div className='mini-drawer-settings-container'>
                <SettingsIcon />
                {openMenu && <div>Settings</div>}
            </div>
        </div>
    )
}

export default DrawerContent
