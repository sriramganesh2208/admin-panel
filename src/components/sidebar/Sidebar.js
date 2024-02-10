import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import WorkIcon from '@mui/icons-material/Work';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration :"none"}}>
        <span className='logo'>Sriram Admin</span>
        </Link>
           
      </div>
      
    <hr/>


      <div className='center'>
        <ul>
            <p className='title'>
                Main
            </p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className='title'>
                Lists
            </p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <PersonSharpIcon  className='icon'/>
                <span>User</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
                <Inventory2Icon  className='icon'/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <WorkIcon  className='icon'/>
                <span>Orders</span>
            </li>
            <p className='title'>
                USEFUL
            </p>
            <li>
                <LocalShippingIcon  className='icon'/>
                <span>Delivery</span>
            </li>
            <li>
                <QueryStatsIcon  className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsIcon  className='icon'/>
                <span>Notifications</span>
            </li>
            <p className='title'>
                SERVICE
            </p>
            <li>
                <SettingsSystemDaydreamIcon  className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon  className='icon'/>
                <span>Logs</span>
            </li>
            <p className='title'>
                USER
            </p>
            <li>
                <SettingsIcon  className='icon'/>
                <span>Settings</span>
            </li>
            <li>
                <AccountCircleIcon  className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon  className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>

      <div className='bottom'>
            <div className='colorOption'>

            </div>
            <div className='colorOption'>

            </div>
            
      </div>
    </div>
  )
}

export default Sidebar