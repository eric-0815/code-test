import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import MovieIcon from '@mui/icons-material/Movie';
import './index.css'

const MobileDrawer = () => {
    return (
        <div className='bottom-drawer-container'>
            <HomeIcon className='bottom-drawer-button' />
            <TrendingUpIcon className='bottom-drawer-button' />
            <PhotoCameraFrontIcon className='bottom-drawer-button' />
            <MovieIcon className='bottom-drawer-button' />
        </div>
    )
}

export default MobileDrawer;
