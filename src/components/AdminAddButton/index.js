import React from 'react'
import './AdminButton.css'
import teamicon from './svgs/people-group-solid.svg'
import matchicon from './svgs/icons8-match-64.svg'
import tournamenticon from './svgs/icons8-trophy-30-_1_.svg'

const AdminAddButton = () => {
  function showCreateTeam(){
    console.log();
  }
  return (
    <div>
        <div className="wrapper">
        <input type="checkbox" />
            <div className="fab"></div>
                <div className="fac">
                    <a onClick={(e) =>{ e.preventDefault();showCreateTeam();}} href='#'><img className='icon' src={teamicon} /></a>
                    <a href="#"><img className='icon' src={matchicon} /></a>
                    <a href="#"><img className='icon' src={tournamenticon} /></a>
                </div>
            </div>
    </div>
  )
}

export default AdminAddButton