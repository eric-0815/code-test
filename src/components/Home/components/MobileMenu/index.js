import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerContext from '../DrawerContent'
import './index.css'


const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='mobile-menu-container' onClick={() => setOpen(!open)}>
            <IconButton>
                <MenuIcon />
            </IconButton>
            {open && <DrawerContext open={true} />}
        </div>
    )
}


export default MobileMenu