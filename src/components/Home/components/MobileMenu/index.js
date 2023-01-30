import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from '../MiniDrawer'
import './index.css'


const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='mobile-menu-container' onClick={() => setOpen(!open)}>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <MiniDrawer isMobile={true} />
        </div>
    )
}


export default MobileMenu