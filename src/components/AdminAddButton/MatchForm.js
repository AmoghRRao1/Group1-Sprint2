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
                        <select title="Select Team One" id="TeamOne" name="TeamOne">
                            <option value="RCB">RCB</option>
                            <option value="CSK">CSK</option>
                            <option value="MI">MI</option>
                            <option value="DC">DC</option>
                        </select>
                        <select title="Select Team Two" id="TeamTwo" name="TeamTwo">
                            <option value="RCB">RCB</option>
                            <option value="CSK">CSK</option>
                            <option value="MI">MI</option>
                            <option value="DC">DC</option>
                        </select>

                        <select title="Select Tournament" id="Tournament" name="Tournament">
                            <option value="RCB">1</option>
                            <option value="CSK">2</option>
                            <option value="MI">3</option>
                            <option value="DC">4</option>
                        </select>

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
