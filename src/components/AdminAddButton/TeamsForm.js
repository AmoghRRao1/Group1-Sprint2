import React, {useState} from 'react'
import './Form.css'

const TeamsForm = ({isOpen,toggle}) => {
    const [teamName, setTeamName] =useState("");
    const [teamCount, setTeamCount] = useState(15);
    const [message, setMessage] =useState("");
    const [hasMessage, setHasMessage] =useState(false);
    const [hasError, setHasError] =useState(false);
    function addTeamHandle(e)
    {
        e.preventDefault();
        setHasMessage(false);                    
        setHasError(false);
        if(teamName ==="")
        {
            setMessage("Team Cannot Be Empty");
            setHasError(true);
            return false;
        }
        if(teamCount<15)
        {
            setMessage("Team Should Have Atleast 15 Players");            
            setHasError(true);
            return false;
        }
        var count = teamCount.toString();
        fetch('http://127.0.0.1:8081/api/admin/createTeam', {
                        method: 'post',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            "teamname":teamName,
                            "teamcount":count
                        })
                    }).then((e)=>{
                        if(e.status==200){                            
                            setHasMessage(true);
                            setMessage("Team Added")}
                        else{
                            setHasError(true);
                            setMessage("There was a problem try again");
                        }
                    
                    });
        
        setTeamName("");
        setTeamCount(15);
        
    }
    return (
        <div>
            <div className="login-page">
                <div className="form1">
                    <form className="login-form">                    
                        <h2 className='heading'>Add Team</h2>
                        <p className={hasError ? "errorMessage" : "hideMessage" + hasMessage ? "doneMessage" : "hideMessage"}>{message}</p>
                        <input id='teamName' name = 'teamName' type="text" placeholder="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)} required/>
                        <input id='teamCount' type="number" placeholder="Team Count" value={teamCount} onChange={e => setTeamCount(e.target.value)}/>
                        <button type="Submit" onClick={(e)=>addTeamHandle(e)}>Add</button>
                        <p className="message" onClick={toggle}>Cancel</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeamsForm
