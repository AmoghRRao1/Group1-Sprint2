import React,{useState,useEffect } from 'react'
import './dashboard.css'


const MatchDetails = (props) => {
    
    let admin = (localStorage.getItem("Admin").toLowerCase() === 'true');
    const[team,setTeam] = useState("");
    const bidHandle = (e) =>
    {
        fetch('http://127.0.0.1:8081/api/bidder/'+ localStorage.getItem("BidderID")+'/bid', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "matchId":e.target.value,
                "teamId":"2"
            })
        }).then((e)=>{
            if(e.status==200){                            
                // setHasMessage(true);
                // setMessage("Team Added")
            }
            else{
                // setHasError(true);
                // setMessage("There was a problem try again");
            }
        
        });

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
                            { admin ?  null:<th className="text-center">Bid Team</th> }
                            { admin ?  null: 
                            <th className="text-center">Action</th>}
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
                                
                                { admin ?  null: <td className="text-center">
                                    <select>
                                        <option value={data.team1}>{data.team1}</option>                                        
                                        <option value={data.team2}>{data.team2}</option>
                                    </select>
                                </td>}                                
                                    { admin ?  null:
                                    <td className="text-center"><button type="button" onClick={(e)=>bidHandle(e)} id="PopoverCustomT-1" className="btn btn-primary btn-sm" value={data.tournamentId}>Bid</button>
                                </td>}
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