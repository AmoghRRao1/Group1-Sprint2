import React, { useState } from 'react'
import './AdminButton.css'
import teamicon from './svgs/people-group-solid.svg'
import matchicon from './svgs/icons8-match-64.svg'
import tournamenticon from './svgs/icons8-trophy-30-_1_.svg'
import TeamsForm from './TeamsForm'


const AdminAddButton = () => {
  const [teamwindow, setTeamWindow] = useState(false);
  const toggleTeamWindow = (e) => {
    e.preventDefault();
    setTeamWindow(!teamwindow);
  }
  return (
    <div className='parent1'>
      <div className='float'>
        <div className="wrapper">
        <input type="checkbox" />
            <div className="fab"></div>
                <div className="fac">
                    <a onClick={(e) =>{toggleTeamWindow(e);}} href='#'><img className='icon' src={teamicon} /></a>
                    <a href="#"><img className='icon' src={matchicon} /></a>
                    <a href="#"><img className='icon' src={tournamenticon} /></a>
                </div>
            </div>
      </div>
      <div className={teamwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleTeamWindow(e)} >
      </div>
        <div className={teamwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <TeamsForm isOpen={teamwindow} toggle={toggleTeamWindow}/>
          </div>    
    </div>
  )
}

export default AdminAddButton