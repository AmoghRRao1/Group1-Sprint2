import React,{useState,useEffect } from 'react'


const Leaderboard = (props) => {
    
    
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
                            <th className="text-center">Name</th>
                            <th className="text-center">Points</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {props.leaderboard.map((data,id)=>{
                            return <tr key={id}>
                                <td className="text-center text-muted">{id+1}</td>                            
                                <td className="text-center">{data.name}</td>
                                <td className="text-center">{data.points}</td>
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

export default Leaderboard