import React from 'react'
import aboutimage from "../images/hero.png"
function About() {
    return (
        <div className="about" id="about">
            <div className="about-model">
                <img src={aboutimage} alt="about image"/>
            </div>
            <div className="about-text">
                <h2> We are the best <br/>Real estate Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum aliquid distinctio natus dignissimos animi. Doloribus officia laboriosam veniam necessitatibus nihil dolore, explicabo et ut voluptas ratione neque possimus laborum!</p>
                <button>View More Details</button>
            </div>
        </div>
    )
}

export default About
