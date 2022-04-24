import React from 'react'
import AdminAddButton from '../../components/AdminAddButton';
import Dashboard from '../../components/Dashboard'
import './dashboard.css'

const DashboardPage = () => {
  document.title = 'Dashboard | IPL Fantasy League';
  
  return (
    <>
      <div className='tablecontainer'>
        <Dashboard heading="Tournaments"/>
        
        </div>

        <div className='float'>
          <AdminAddButton />
        </div>
    </>
  )
  }


export default DashboardPage