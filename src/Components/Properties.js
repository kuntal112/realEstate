import React from 'react'
import Propertybox from "./Propertybox"
import pimage1 from "../images/p1.png"
import pimage2 from "../images/p2.png"
import pimage3 from "../images/p3.png"

function Properties() {
    return (
        <div className="product" id="property">
            <div className="p-heading">
                <h3>Properties</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ut!</p>
            </div>
            <div className="product-container">
                 <Propertybox image={pimage1} name="property1" price="30lc"/>
                 <Propertybox image={pimage2} name="property2" price="30lc"/>
                 <Propertybox image={pimage3} name="property3" price="30lc"/>
            </div>
            
        </div>
    )
}

export default Properties
