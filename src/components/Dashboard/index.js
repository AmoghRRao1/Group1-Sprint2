import React,{useState,useEffect } from 'react'
import './dashboard.css'

const Dashboard = (props) => {
    const[tournaments, setTournaments]=useState([]);
    // fetch('http://127.0.0.1:8081/api/public/tournaments', {
    //     method: 'get',
    //     headers: {'Content-Type':'application/json'},
    // })
    // .then((response)=>{
    //     if(response.status==200){   
    //         let res = response.json();            
    //         setTournaments(res);
    //     }                    
    // })

    // useEffect(()=>
    // {
    //     fetch('http://127.0.0.1:8081/api/public/tournaments')
    //     .then((response)=>{
    //             if(response.status==200){   
    //                 let res = response.json();            
    //                 setTournaments( res);
    //                 return;
    //             }                  
    //     })
    // });
    
    console.log(tournaments);


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
                        <tr>
                            <td className="text-center text-muted">#345</td>                            
                            <td className="text-center">Madrid</td>
                            <td className="text-center">
                                <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* <div className="d-block text-center card-footer">
                    <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                    <button className="btn-wide btn btn-success">Save</button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard