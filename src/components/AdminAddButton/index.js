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

            <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form>
                    <div className="modal-body">
                      <div className="form-group">
                        <label for="teamName">Team Name </label>
                        <input type="text" className="form-control" id="teamName" aria-describedby="emailHelp" placeholder="Enter team name" />
                       {/* <small id="emailHelp" className="form-text text-muted">Your information is safe with us.</small> */}
                      </div>
                      <div className="form-group">
                        <label for="teamCount">Team Count</label>
                        <input type="number" className="form-control" id="teamCount" value="15" />
                      </div>
                    </div>
                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    </div>
  )
}

export default AdminAddButton