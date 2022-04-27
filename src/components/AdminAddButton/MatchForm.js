import React, {useState} from 'react'
import './Form.css'

const MatchForm = ({isOpen,toggle}) => {
    const [teamOne, setTeamOne] =useState("");
    const [teamTwo, setTeamTwo] =useState("");
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [inputError, setInputError] =useState("");
    const [hasError, setHasError] =useState(false);
    function addMatchHandle(e)
    {
        e.preventDefault();
        // setHasError(false);
        // if(teamName ==="")
        // {
        //     setInputError("Team Cannot Be Empty");
        //     setHasError(true);
        //     return false;
        // }
        // if(teamCount<15)
        // {
        //     setInputError("Team Should Have Atleast 15 Players");
        //     setHasError(true);
        //     return false;
        // }
        // var count = teamCount.toString();
        // var res = fetch('http://127.0.0.1:8081/api/admin/createTeam', {
        //                 method: 'post',
        //                 headers: {'Content-Type':'application/json'},
        //                 body: JSON.stringify({
        //                     "teamname":teamName,
        //                     "teamcount":count
        //                 })
        //             });
        // console.log(res);
        // setTeamName("");
        // setTeamCount(15);
        
    }
    return (
        <div>
            <div className="login-page">
                <div className="form1">
                    <form className="login-form">                    
                        <h2 className='heading'>Schedule Match</h2>
                        <p className={hasError ? "errorMessage" : "hideError"}>{inputError}</p>
                        <label for="cars">Choose Team one:</label>
                        <select id="TeamOne" name="TeamOne">
                            <option value="RCB">RCB</option>
                            <option value="CSK">CSK</option>
                            <option value="MI">MI</option>
                            <option value="DC">DC</option>
                        </select>
                        <label for="cars">Choose Team two:</label>
                        <select id="TeamTwo" name="TeamTwo">
                            <option value="RCB">RCB</option>
                            <option value="CSK">CSK</option>
                            <option value="MI">MI</option>
                            <option value="DC">DC</option>
                        </select>
                        <label for="cars">Select Match Date:</label>
                        <input id='matchDate' type="date" value={matchDate} onChange={e => setMatchDate(e.target.value)}/>
                        <label for="cars">Select Match time:</label>
                        <input id='matchTime' type="time" value={matchTime} onChange={e => setMatchTime(e.target.value)}/>
                        <button type="Submit" onClick={(e)=>addMatchHandle(e)}>Add</button>
                        <p className="message" onClick={toggle}>Cancel</p>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default MatchForm