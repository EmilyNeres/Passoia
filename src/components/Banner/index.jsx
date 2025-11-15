import "./banner.scss"

import banner from "../../assets/banner.png"

 function Banner (){ 
    return( 
    <div
     className="banner" 
     style={{backgroundImage:`URL(${banner})`}}
     ></div>
    )
 } 
 export default Banner;