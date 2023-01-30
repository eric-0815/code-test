import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css'


const MobileMenu = ({ MenuContext }) => {
    const [openMenu, setOpenMenu] = useContext(MenuContext)

    return (
        <IconButton className='mobile-menu-icon' onClick={() => setOpenMenu(!openMenu)}>
            <MenuIcon />
        </IconButton>
    )
}


export default MobileMenu