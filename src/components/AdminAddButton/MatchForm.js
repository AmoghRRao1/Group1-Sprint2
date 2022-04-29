
import React, {useState,useEffect} from 'react'
import Select from 'react-select'
import './Form.css'

const MatchForm = ({isOpen,toggle}) => {
    const [teamOne, setTeamOne] =useState("");
    const [teamTwo, setTeamTwo] =useState("");
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [hasMessage, setHasMessage] =useState(false);
    const [message, setMessage] =useState("");
    const [matchId, setMatchId] =useState("");
    const [inputError, setInputError] =useState("");
    const [hasError, setHasError] =useState(false);

    const[teams,setTeams]=useState([]);
    const [selected, setSelected] = useState([]);
    
    let[tournaments, setTournaments]=useState([]);
    
    const [allTeams, setAllTeams] = useState([]);

    const [teamOptions,setTeamOptions] =useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8081/api/public/tournaments')
        .then(response => response.json())
        .then(data => setTournaments(data));} ,[]);


    const getTeams = async (id) =>
    {
        const res = await fetch('http://127.0.0.1:8081/api/admin/getTeams/'+id);
        return await res.json();
        
    }
    const getAllTeams = async () =>
    {
        const res = await fetch('http://127.0.0.1:8081/api/public/getTeams');
        return await res.json();
        
    }
    
    const onSelectTournament = async (v) =>
    {
        setSelected(v);
        let res = await getTeams(parseInt(v.tournamentId));
        setTeams(res);  
        res = await getAllTeams(parseInt(v.tournamentId));
        setAllTeams(res);  
        setTeamOptions(allTeams.filter(team => teams.includes(team.teamId)));    
    }

    
    function addMatchHandle(e)
    {
        e.preventDefault();
        var res = fetch('http://127.0.0.1:8081/api/admin/tournament/'+ selected.tournamentId +'/scheduleMatches', {
                        method: 'post',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            "id":matchId,
                            "team1":teamOne.teamId.toString(),
                            "team2":teamTwo.teamId.toString(),
                            "matchtime":matchTime,
                            "matchdate":matchDate
                        })
                    }).then((e)=>{
                        if(e.status==200){                            
                            setHasMessage(true);
                            setMessage("Match schduled")}
                        else{
                            setHasError(true);
                            setMessage("There was a problem try again");
                        }
                    
                    });
        console.log(tournaments.tournamentId);
        
        setTeamOne("");
        setTeamTwo("");
        setMatchTime("");
        setMatchDate("");

        window.location.reload();
            
    }

    const customStyles = {
        indicatorSeparator: (styles) => ({
                    ...styles,
                    display:"none",
                }),
        control: (styles) => ({
                    ...styles,
                    borderRadius: "25px",
                    width:"100%",
                    background:"#f2f2f2",
                    border:"1px solid transparent",
                    margin:"2px",
                    padding: "5px",
                }),
        

        }

    return (
        <div>
            <div className="login-page">
                <div className="form1">
                    <form className="login-form">                    
                        <h2 className='heading'>Schedule Match</h2>
                        <p className={hasError ? "errorMessage" : "hideError"}>{inputError}</p>

                        <div className='selectclass'>
                            <Select placeholder="Select Tournament ID" value={selected} onChange={(v) => onSelectTournament(v)} 
                            options={tournaments} styles={customStyles} menuPlacement="auto"
                            getOptionLabel={(option) =>option.tournamentId}  getOptionValue={(option) => option.tournamentId} />
                        </div>
                        
                        <input id='matchId' type="number" placeholder="Match Id" value={matchId} onChange={e => setMatchId(e.target.value)}/>

                        <div className='selectclass'>
                            <Select placeholder="Select Teams In Tournament" value={teamOne} onChange={(v) => setTeamOne(v)} 
                            options={teamOptions} styles={customStyles} menuPlacement="auto"
                            getOptionLabel={(option) => option.teamName}  getOptionValue={(option) => option.teamId} />
                        </div>

                        <div className='selectclass'>
                            <Select placeholder="Select Teams In Tournament" value={teamTwo} onChange={(v) => setTeamTwo(v)} 
                            options={teamOptions} styles={customStyles} menuPlacement="auto"
                            getOptionLabel={(option) => option.teamName}  getOptionValue={(option) => option.teamId} />
                        </div>

                        
                        <input title="Select Match Date" id='matchDate' type="date" value={matchDate} onChange={e => setMatchDate(e.target.value)}/>
                        <input title="Select Match Time" id='matchTime' type="time" value={matchTime} onChange={e => setMatchTime(e.target.value)}/>
                        <button type="Submit" onClick={(e)=>addMatchHandle(e)}>Add</button>
                        <p className="message" onClick={toggle}>Cancel</p>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default MatchForm
