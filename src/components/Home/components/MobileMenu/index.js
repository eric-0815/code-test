import React, { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from '../MiniDrawer'
import './index.css'



const MobileMenu = (props) => {
    const { isOpen, setIsOpen, setIsMobile } = props

    const handleOpendAndClose = useCallback(() => {
        setIsOpen(!isOpen)
        setIsMobile(true)
    }, [isOpen, setIsOpen, setIsMobile])

    return (
        <div className='mobile-menu-container' onClick={handleOpendAndClose}>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <MiniDrawer isMobile={true} />
        </div>
    )
}


export default MobileMenu