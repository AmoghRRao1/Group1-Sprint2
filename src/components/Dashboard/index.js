import React,{useState,useEffect } from 'react'
import './dashboard.css'
import './matchdetails.css'
import MatchDetails from './MatchDetails';

const Dashboard = (props) => {
    let[tournaments, setTournaments]=useState([]); 
    let[matches, setMatches]=useState([]); 
    const[tournamentID, setTournamentID]=useState(0); 

    const [matchDetailwindow, setMatchDetailWindow] = useState(false);
  const toggleMatchDetailWindow = (e) => {
    e.preventDefault();
    setMatchDetailWindow(!matchDetailwindow);
  }
  const openMatchDetails = (e)=>
  {
    setTournamentID(parseInt(e.target.value));
    toggleMatchDetailWindow(e); 
    setMatches(tournaments[tournamentID].matches);
    console.log(matches);
  }
    useEffect(() => {
    fetch('http://127.0.0.1:8081/api/public/tournaments')
    .then(response => response.json())
    .then(data => setTournaments(data));}, []);
    //console.log(tournaments); 


  return (
    <div className="table">
        <div className="col-md-12">
            <div className="main-card mb-3 card">
                <div className="card-header">{props.heading}
                </div>
                <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Number Of Matches</th>
                            <th className="text-center">Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tournaments.map((data,id)=>{
                            return <tr  key={id}>
                                <td className="text-center text-muted">{data.tournamentId}</td>                            
                                <td className="text-center">{data.matches.length}</td>
                                <td className="text-center">
                                    <button type="button" id="PopoverCustomT-1" onClick={(e)=>openMatchDetails(e)} className="btn btn-primary btn-sm" value={id}>Details</button>
                                </td>
                            </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className={matchDetailwindow ? 'overlay_form showWindow': 'overlay_form hideWindow'} onClick={(e)=>toggleMatchDetailWindow(e)} >
        </div>
            <div className={matchDetailwindow ? 'TeamForm showWindow': 'TeamForm hideWindow'}>
            <MatchDetails heading="Matches" Matches = {matches} isOpen={matchDetailwindow} toggle={toggleMatchDetailWindow}/>
            </div>
    </div>
  )
}

export default Dashboard