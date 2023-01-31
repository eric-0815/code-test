import React, { useCallback } from 'react';
import useMedia from 'use-media';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from '../MiniDrawer'
import './index.css'



const MobileMenu = (props) => {
    const { isOpen, setIsOpen, isMobile, setIsMobile } = props
    const isSmall = useMedia({ maxWidth: '1300px' });
    const handleOpendAndClose = useCallback(() => {
        setIsOpen(!isOpen)
        setIsMobile(true)
    }, [isOpen, setIsOpen, setIsMobile])

    return (
        <div>
            {isSmall &&
                <div>
                    <MiniDrawer isOpen={isOpen} isMobile={isMobile} />
                    <div className='mobile-menu-container' onClick={handleOpendAndClose}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
            }
        </div>
    )
}


export default MobileMenu