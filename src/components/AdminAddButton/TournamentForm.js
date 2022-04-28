import React, {useState} from 'react'
import Select from 'react-select'
import './Form.css'

const TournamentForm = ({isOpen,toggle}) => {
    const [tournamentID, setTournamentID] =useState("");
    const [teams, setTeams] =useState("");
    const [inputError, setInputError] =useState("");
    const [hasError, setHasError] =useState(false);

    const [selected, setSelected] = useState([]);

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
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
      ]

    function addTournamentHandle(e)
    {
        e.preventDefault();
        const value = []
        selected.forEach(ele => value.push(ele.value));
        
        let teams = "";
        for (let x of value) {
            teams += x + " ";
        }
    
        console.log(teams);
        var res = fetch('http://127.0.0.1:8081/api/admin/createTournament', {
                        method: 'post',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            "tournamentId":parseInt(tournamentID),
                            "teamIds":teams
                        })
                    });
        console.log(res);
        setTournamentID("");
        setTeams("");
        
    }
    return (
        <div>
            <div className="login-page">
                <div className="form1">
                    <form className="login-form">                    
                        <h2 className='heading'>Add Tournament</h2>
                        <p className={hasError ? "errorMessage" : "hideError"}>{inputError}</p>
                        <input title="Select Match Time" id='matchTime' type="text" value={tournamentID} onChange={e => setTournamentID(e.target.value)}/>
                        <div className='selectclass'>
                            <Select placeholder="Select Teams In Tournament" value={selected} onChange={(v) => v.length <= 8 ? setSelected(v): null} options={options} styles={customStyles} menuPlacement="auto" isMulti />
                        </div>
                        <button type="Submit" onClick={(e)=>addTournamentHandle(e)}>Add</button>
                        <p className="message" onClick={toggle}>Cancel</p>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default TournamentForm