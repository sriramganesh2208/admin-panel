import React from 'react'
import './Navbar.scss'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotAccessibleOutlined, NotificationAddOutlined, SearchOutlined } from '@mui/icons-material'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search...'/>
                <SearchOutlined/>
            </div>
            <div className='items'>
                <div className='item'>
                   <LanguageOutlined className='icon'/> 
                    English
                </div>

                <div className='item'>
                   <DarkModeOutlined className='icon'/> 
                    
                </div>

                <div className='item'>
                   <FullscreenExitOutlined className='icon'/> 
                
                </div>

                <div className='item'>
                   <NotAccessibleOutlined className='icon'/> 
                   
                </div>

                
                <div className='item'>
                   <NotificationAddOutlined className='icon'/> 
                   <div className='counter'>1</div>
                </div>

                <div className='item'>
                   <ChatBubbleOutlineOutlined className='icon'/> 
                   <div className='counter'>2</div>
                </div>

                <div className='item'>
                   <ListOutlined className='icon'/> 
                   
                </div>

                <div className='item'>
                 <img 
                 className='avatar'
                 src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fhd-country-life-at-night-vvxmbqzkr4uumuni.jpg&tbnid=lSJLwFfwk0UbVM&vet=12ahUKEwjHq63k0JaEAxUYamwGHWSVAjcQMyghegQIARB-..i&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fhd&docid=9AFiTSqOf7DCcM&w=1920&h=1200&q=hd%20images&ved=2ahUKEwjHq63k0JaEAxUYamwGHWSVAjcQMyghegQIARB-'/>
                   
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar