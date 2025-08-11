import React, { useEffect, useState } from 'react';
import {Poll, PollOption} from '../types/Poll'

interface ResultsProps {
 
    data: PollOption[];
     
    viewWinner: boolean;
     
    setViewWinner: (viewWinner: boolean) => void;
     
    totalVotes: number;
}
     
const Results: React.FC<ResultsProps> = ({data, viewWinner, setViewWinner, totalVotes}) => {

    const [totalVote, setTotalVote] = useState<number>(totalVotes)
    const [winner, setWinner] = useState<PollOption>()
    const [looser, setLooser] = useState<PollOption>()

    useEffect(()=>{
        setTotalVote(data.reduce((sum, item)=>sum +item.votes, 0))
        setWinner(data.reduce((max, item)=>item.votes>max.votes?item:max, data[0]))
        setLooser(data.reduce((min, item)=>item.votes<min.votes?item:min, data[0]))
    },[viewWinner])


    
    return (
        <>
            <p data-testid="result">&nbsp;{viewWinner && <span>{totalVote}<br/>
                    {winner?.votes!==looser?.votes && <>Winner: {winner?.text} with vote: {winner?.votes}<br/>
                    Looser:{looser?.text} with vote: {looser?.votes}</>}
                    </span>}
            </p>
        
            <section className="layout-row align-items-center justify-content-center mr-10 ml-10 pr-10 pl-10">
            
                    <button data-testid="winner-button" onClick={() => setViewWinner(true)} disabled= {false}>
                    
                    View Winner
                    
                    </button>
            
            </section>
        </>
    )
}

export default Results