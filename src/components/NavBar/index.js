import React, { useState } from 'react'
import './nav.css'
import './leaderboard.css'
import { useHistory } from 'react-router-dom';
import Leaderboard from './Leaderboard';

const NavBar = () => {
  let history= useHistory();

  

  const handleLogout=()=>
  {
    let admin = (localStorage.getItem("Admin").toLowerCase() === 'true');
    localStorage.removeItem("Admin")
    if(!admin){
      localStorage.removeItem("BidderID")
    }
    history.push("/");
    window.location.reload();
    
  }

  const[leaderboardWindow,setLeaderboardWindow]=useState(false);
  const toggleLeaderboardWindow =() =>
  {
    setLeaderboardWindow(!leaderboardWindow);
  }
  let [leaderboard,setLeadboard]=useState([]);
  const getData= async ()=>
  {
      let data = await fetch('http://127.0.0.1:8081/api/bidder/showleaderboard')
      return await data.json();        
  }

  const showLeaderboard= async ()=>
  {
    let leaderboarddata = await getData();
    setLeadboard(leaderboarddata);
    toggleLeaderboardWindow();
  }
  
  let admin = (localStorage.getItem("Admin").toLowerCase() === 'true');
  return (
    <div>
       <nav className='navclass'>
         <div className='navelecontainer'>
            <ul className='navrightele'>
              <li className='eleitem'><div className='navele'>
              IPL Fantasy Leauge
            </div></li>
            </ul>            
          </div>
          <ul className='navleftele'>
            {admin ? null :<li className='eleitem'><div className='navele' onClick={(e)=> showLeaderboard()}>
                Leaderboard
              </div></li>}
              <li className='eleitem'><div className='navele' onClick={(e)=> handleLogout()}>
                Logout
              </div></li>
            </ul>
       </nav>
       <div className={leaderboardWindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleLeaderboardWindow()} >
        </div>
            <div className={leaderboardWindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
              
            {leaderboardWindow ? < Leaderboard leaderboard={leaderboard} heading="LeaderBoard" isOpen={leaderboardWindow} toggle={toggleLeaderboardWindow}/>:null}
            </div>
    </div>
  )
}

export default NavBar