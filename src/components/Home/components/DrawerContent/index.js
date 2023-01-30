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
import './index.css'

const DrawerContent = ({ open }) => {
    return (
        <div className='drawer-content-container'>
            <List>
                {['Search', 'Home', 'Trending', 'Web Series', 'Movies'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index === 0 && (<SearchIcon />)}
                                {index === 1 && (<HomeIcon />)}
                                {index === 2 && (<TrendingUpIcon />)}
                                {index === 3 && (<PhotoCameraFrontIcon />)}
                                {index === 4 && (<MovieIcon />)}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className='drawer-content-user-container'>
                <div className='drawer-content-user-icon'></div>
                {open && <div>User</div>}
            </div>
            <div className='drawer-content-settings-container'>
                <SettingsIcon />
                {open && <div>Settings</div>}
            </div>
        </div>
    )
}

export default DrawerContent
