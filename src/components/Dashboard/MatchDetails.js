import React,{useState,useEffect } from 'react'
import './dashboard.css'

const MatchDetails = (props) => {
    bidHandle(e)
    {
        
    }

  return (
    <div className="m0 table">
        <div className="col-md-12">
            <div className="m0 main-card card">
                <div className="card-header">{props.heading}
                </div>
                <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Team 1</th>
                            <th className="text-center">Team 2</th>
                            <th className="text-center">Match Date</th>
                            <th className="text-center">Match Time</th>
                            <th className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.Matches.map((data,id)=>{
                            return <tr  key={id}>
                                <td className="text-center text-muted">{id+1}</td>                            
                                <td className="text-center">{data.team1}</td>
                                <td className="text-center">{data.team2}</td>
                                <td className="text-center">{data.matchDate}</td>
                                <td className="text-center">{data.matchTime}</td>
                                <td className="text-center">
                                    { props.isAdmin ?  <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" value={data.tournamentId}>Reschedule</button>:
                                    <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" value={data.tournamentId}>Bid</button>}
                                </td>
                            </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MatchDetails