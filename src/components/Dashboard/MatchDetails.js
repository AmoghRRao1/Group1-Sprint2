import React,{useState,useEffect } from 'react'
import './dashboard.css'


const MatchDetails = (props) => {
    
    let admin = (localStorage.getItem("Admin").toLowerCase() === 'true');
    
    const winHandle = (e) =>
    {
        let team = document.getElementById(e.target.value).value;
        fetch('http://127.0.0.1:8081/api/admin/'+e.target.value+'/setWinner', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "winnerId":team
            })})
        window.location.reload();
        
    }
    const bidHandle = (e) =>
    {
        let team = document.getElementById(e.target.value).value;
        console.log(e.target.value,team);
        fetch('http://127.0.0.1:8081/api/bidder/'+ localStorage.getItem("BidderID") +'/bid', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "matchId":e.target.value,
                "teamId":team
            })})
        alert("Bid Successful")
        window.location.reload();

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
                            <th className="text-center">Winner</th>
                            { admin ?  <th className="text-center">Action</th>:<th className="text-center">Bid Team</th> }
                            
                        </tr>
                        </thead>
                        <tbody>
                        {props.Matches.map((data,id)=>{
                            return <tr key={id}>
                                <td className="text-center text-muted">{id+1}</td>                            
                                <td className="text-center">{props.teamnames.find(name=> name.teamId==data.team1).teamName}</td>
                                <td className="text-center">{props.teamnames.find(name=> name.teamId==data.team2).teamName}</td>
                                <td className="text-center">{data.matchDate}</td>
                                <td className="text-center">{data.matchTime}</td>
                                <td className="text-center">{data.winner}</td>
                                { data.winnerId < 0 ?
                                 <td className="text-center">
                                    <select  id={data.matchId}>
                                        <option value={0}>Select Team</option>
                                        <option value={data.team1}>{data.team1}</option>                                        
                                        <option value={data.team2}>{data.team2}</option>
                                    </select>
                                </td> : <td className="text-center"></td> }  

                                    { data.winnerId < 0 ? admin ?   <td className="text-center"><button type="button" onClick={(e)=>winHandle(e)} 
                                    id="PopoverCustomT-1" className="btn btn-primary btn-sm" value={data.matchId}>Declare Winner</button></td>:
                                    <td className="text-center"><button type="button" value={data.matchId} onClick={(e)=>bidHandle(e)} id="PopoverCustomT-1" className="btn btn-primary btn-sm">Bid</button>
                                </td>:<td className="text-center"> </td>}
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