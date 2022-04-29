import React, {useState} from 'react'
import AdminAddButton from '../../components/AdminAddButton';
import Dashboard from '../../components/Dashboard'
import NavBar from '../../components/NavBar';
import './dashboard.css'

const DashboardPage = (props) => {
  document.title = 'Dashboard | IPL Fantasy League';
  let admin = (localStorage.getItem("Admin").toLowerCase() === 'true');
    
  return (
    <>
        <NavBar />
      <div className='tablecontainer'>
        <Dashboard heading="Tournaments" isAdmin ={admin}  />        
        </div>
        { admin?        
          <div className='float'>
            <AdminAddButton />
          </div> : null
          }
    </>
  )
  }


export default DashboardPage