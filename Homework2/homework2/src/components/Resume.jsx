import React from 'react';
import icon from './images/icon.jpg';

const Firstpart = () => {
    return (
        <>
            <h1>Resume</h1>
            <img src={icon} alt="icon" style={{ width: "200px", height: "auto" }} />
            <h4>NAME: Shreyasi Dutta</h4>
            <p>B.Tech in ECE</p>
            <p>Currently in 4th year</p>
            <hr/>

        </>
    );
}

const Secondpart = () => {
    return (
        <>
            <h4>Educational Qualifications</h4>
            <ol>
            <li>B. P. Poddar Institute of Management & Technology - B.Tech in ECE</li>
            <br/>
            <li>Kendriya Vidyalaya Cossipore - Higher Secondary Education</li>
            <br/>
            <li>Kendriya Vidyalaya Cossipore - Senior Secondary Education</li>
            </ol>
            <hr/>
        </>
    );
}

const Thirdpart = () => {
    return (
        <>
            <h4>Family Details</h4>
            <p>Father's name: Somnath Dutta</p>
            <p>Mother's name: Sujata Dutta</p>
            <hr/>
        </>
    );
}

const Fourthpart = () => {
    return(
        <>
            <h4>Details</h4>
            <p>Email: xyza@gmail.com</p>
        </>
    )
}



export { Firstpart, Secondpart, Thirdpart, Fourthpart};
