import React from 'react'
import {MouseOutlined,ArrowDownward} from '@mui/icons-material';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            
            <MouseOutlined className='home__scroll-icon wheel'/>
            
            <span className="home__scroll-name">Scroll Down</span>
            <ArrowDownward className='home__scroll-arrow'/>
        </a>
    </div>
  )
}

export default ScrollDown