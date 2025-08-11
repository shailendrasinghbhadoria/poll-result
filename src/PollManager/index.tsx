import React, { useState } from 'react';
import Results from '../Results';
import Vote from '../Vote'
import {pollData, PollOption} from '../types/Poll'

const PollManager: React.FC=()=>{

const [viewWinner, setViewWinner] = useState(false)

const [data, setData]= useState<PollOption[]>(pollData.options)

const onVote=(id:number)=>{

    setData(prevData=>
        prevData.map(option=>
            option.id===id?{...option, votes:option.votes+1}:option
        )
    )

}

 
return (
 
    <div className="layout-column align-items-center justify-content-start poll-manager" data-testid="poll-manager" style={{paddingBottom:"20px"}}>

        <h2>{pollData.question}</h2>
        
        <Vote options={pollData.options} onVote={onVote} viewWinner={viewWinner} />
        
        <Results data={data} viewWinner={viewWinner} setViewWinner={setViewWinner} totalVotes={0} />

    </div>
)
}
export default PollManager;