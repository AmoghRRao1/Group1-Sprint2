import React, {useState} from 'react'
import AdminAddButton from '../../components/AdminAddButton';
import Dashboard from '../../components/Dashboard'
import NavBar from '../../components/NavBar';
import './dashboard.css'
import { useHistory } from 'react-router-dom';

const DashboardPage = (props) => {
  document.title = 'Dashboard | IPL Fantasy League';  
  let history= useHistory();
  if (localStorage.getItem('Admin') == null) {
    alert("You Need to Login");
    history.push("/");
    window.location.reload();
  }
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