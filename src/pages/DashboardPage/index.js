import React from 'react'
import Dashboard from '../../components/Dashboard'
import './dashboard.css'

const DashboardPage = () => {
  document.title = 'Dashboard | IPL Fantasy League';
  return (
    <div className='tablecontainer'><Dashboard /></div>
  )
  }


export default DashboardPage