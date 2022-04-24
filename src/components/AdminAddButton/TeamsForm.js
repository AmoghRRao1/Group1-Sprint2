import React from 'react'
import './TeamsForm.css'

const TeamsForm = ({isOpen,toggle}) => {
  return (
    <div>
        <div className="login-page">
            <div className="form1">
                <form className="login-form">                    
                    <h2 className='heading'>Add Team</h2>
                    <input id='teamName' type="text" placeholder="Team Name"/>
                    <input id='teamCount' type="number" placeholder="Team Count"/>
                    <button>Add</button>
                    <p className="message" onClick={toggle}>Cancel</p>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default TeamsForm