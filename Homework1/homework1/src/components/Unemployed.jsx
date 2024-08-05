import React from 'react';
import Unemployed from '../components/images/Unemployed.jpeg'
import reason from '../components/images/reason.png'
import Solution from '../components/images/Solution.png'

const Firstpart = () => {
    return(
    <>
        <h3>Unemployment</h3>
        <img src={Unemployed} alt="unemployed" style={{width:"200px",height:"auto"}}/>
        <p>Unemployment refers to the condition where individuals who are capable and willing to work are unable to find suitable employment.</p>

    </>
    )
}

const Secondpart = () => {
    return(
        <>
            <h3>Reasons</h3>
            <img src={reason} alt="reason" style={{width:"200px",height:"auto"}}/>
            <p>Economic recession, Technological advancements, Structural changes in the economy, Lack of education and skills, Seasonal fluctuations</p>
        </>
    )
}

const Thirdpart  =() => {
    return(
        <>
            <h3>Solution</h3>
            <img src={Solution} alt="Solution" style={{width:"200px",height:"auto"}}/>
            <p>To address unemployment, strategies such as investing in education and training programs, fostering economic growth, promoting entrepreneurship, and implementing supportive government policies can be effective.</p>
        </>
    )
}

export{Firstpart, Secondpart, Thirdpart}
