import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Tables'

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
            <div className='widgets'>
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>

            <div className='charts'>
                <Featured/>
                <Chart title="Last 6 months (Revenue)" aspect={2/1}/>
            </div>
            <div className='listContainer'>
                <div className='listTitle'>Latest Transactions</div>
                <List/>
            </div>
        </div>
    </div>
  )
}

export default Home