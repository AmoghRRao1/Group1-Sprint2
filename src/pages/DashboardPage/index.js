import React, {useState} from 'react'
import AdminAddButton from '../../components/AdminAddButton';
import Dashboard from '../../components/Dashboard'
import './dashboard.css'

const DashboardPage = (props) => {
  document.title = 'Dashboard | IPL Fantasy League';
    
  return (
    <>
      <div className='tablecontainer'>
        <Dashboard heading="Tournaments"/>        
        </div>
        { props.isAdmin ?        
          <div className='float'>
            <AdminAddButton />
          </div> : null
          }
    </>
  )
  }


export default DashboardPage