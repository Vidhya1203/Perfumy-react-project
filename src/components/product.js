import one from "../assets/images/three.jpg"
import two from "../assets/images/two.jpg"

import three from "../assets/images/one.jpg"

function Product()
{
  return(  
  <div class="products">
  
    <div className="box">
       
     <img src={two} alt="img"  />
     <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
       <div class="box">
              <img src={one} alt="villain"  />
              <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
          </div>
          <div class="box">
              <img src={three} alt="Designs Club" />
              <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
          </div>
          </div> )
      }   
      export default Product
      export {one,two, three}