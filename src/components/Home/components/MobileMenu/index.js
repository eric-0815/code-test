import React, { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from '../MiniDrawer'
import './index.css'



const MobileMenu = (props) => {
    const { isOpen, setIsOpen, isMobile, setIsMobile, isBig, isSmall } = props
    const handleOpendAndClose = useCallback(() => {
        setIsOpen(!isOpen)
        setIsMobile(true)
    }, [isOpen, setIsOpen, setIsMobile])

    return (
        <div>
            {isSmall &&
                <div>
                    <MiniDrawer
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isMobile={isMobile}
                        isBig={isBig}
                        isSmall={isSmall} />
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