import React, { useState } from 'react'
import './AdminButton.css'
import teamicon from './svgs/people-group-solid.svg'
import matchicon from './svgs/icons8-match-64.svg'
import tournamenticon from './svgs/icons8-trophy-30-_1_.svg'
import TeamsForm from './TeamsForm'
import MatchForm from './MatchForm'
import TournamentForm from './TournamentForm'


const AdminAddButton = () => {
  const [teamwindow, setTeamWindow] = useState(false);
  const toggleTeamWindow = (e) => {
    e.preventDefault();
    setTeamWindow(!teamwindow);
  }

  const [matchwindow, setMatchWindow] = useState(false);
  const toggleMatchWindow = (e) => {
    e.preventDefault();
    setMatchWindow(!matchwindow);
    
  }

  const [tournamentwindow, setTournamentWindow] = useState(false);
  const toggleTournamentWindow = (e) => {
    e.preventDefault();
    setTournamentWindow(!tournamentwindow);
    
  }
  return (
    <div className='parent1'>
      <div className='float'>
        <div className="wrapper">
        <input type="checkbox" />
            <div className="fab"></div>
                <div className="fac">
                    <a onClick={(e) =>{toggleTeamWindow(e);}} href='#'><img className='icon' src={teamicon} /></a>
                    <a onClick={(e) =>{toggleMatchWindow(e);}} href="#"><img className='icon' src={matchicon} /></a>
                    <a onClick={(e) =>{toggleTournamentWindow(e);}} href="#"><img className='icon' src={tournamenticon} /></a>
                </div>
            </div>
      </div>
      <div className={teamwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleTeamWindow(e)} >
      </div>
        <div className={teamwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <TeamsForm isOpen={teamwindow} toggle={toggleTeamWindow}/>
          </div>  
        
      <div className={matchwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleMatchWindow(e)} >
      </div>
        <div className={matchwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <MatchForm isOpen={matchwindow} toggle={toggleMatchWindow}/>
          </div> 

      <div className={tournamentwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleTournamentWindow(e)} >
      </div>
        <div className={tournamentwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
          <TournamentForm isOpen={tournamentwindow} toggle={toggleTournamentWindow}/>
          </div> 
    </div>
  )
}

export default AdminAddButton