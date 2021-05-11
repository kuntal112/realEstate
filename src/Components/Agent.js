import React from 'react'
import Agentbox from "./Agentbox"
import agent1 from "../images/s1.png"
import agent2 from "../images/s2.png"
import agent3 from "../images/s3.png"
function Agent() {
    return (
        <div className="agent" id="agent">
            <div className="a-heading">
                <h1>Agent</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ut!</p>
            </div>
            <div className="b-container">
            <Agentbox image={agent1} name="Bittu"/>
            <Agentbox image={agent2} name="Bittu"/>
            <Agentbox image={agent3} name="Bittu"/>
            </div>
            
        </div>
    )
}

export default Agent
