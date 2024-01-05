import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();



  const movetoAbout = () => {
    navigate('/About');
}
    return (
        <div>
            
            <div className="above-carousel">
                <h1 style={{color:"azure", fontWeight:"700"}}>Welcome to Our Sports Store</h1>
                <p>Explore a wide range of sports equipment and accessories.</p>
            </div>
            <div className="below-carousel">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {/* Add some featured product cards or any other content here */}
                    <div className="product-card">
                        <img style={{width:"360px",height:"200px"}} src="https://i.pinimg.com/736x/88/b2/fb/88b2fb0337b6da1f11a03fda26150a24.jpg" alt="Product 1" />
                        <h3>"Adidas Cricket Bats"</h3>
                        <p></p>
                    </div>
                    <div className="product-card">
                        <img style={{width:"360px",height:"200px"}} src="https://cdn.wallpapersafari.com/19/77/Ma6Gl3.jpg" alt="Product 1" />
                        <h3>"Nike Football"</h3>
                        {/* <p>Description of Product 1.</p> */}
                    </div>
                    <div className="product-card">
                        <img style={{width:"360px",height:"200px"}}  src="https://static.vecteezy.com/system/resources/previews/006/614/429/large_2x/cream-white-badminton-shuttlecock-and-racket-with-neon-light-shading-on-green-floor-in-indoor-badminton-court-blurred-badminton-background-copy-space-free-photo.jpg" 
                        alt="Product 1" />
                        <h3>"Yoenex Rackets"</h3>
                        {/* <p>Description of Product 1.</p> */}
                    </div>
                    {/* Add more product cards as needed */}
                </div>
                
            </div>
            <div className="additional-content">
                <section className="special-offers">
                    <h2>Special Offers</h2>
                    <div className="offer-card">
        <h3>Discount on Premium Memberships</h3>
        <p>Upgrade to our premium membership and get a 20% discount on your first purchase. Enjoy exclusive benefits and early access to new arrivals.</p>
       <button onClick={movetoAbout}>Learn More</button> 
    </div>

    <div className="offer-card">
        <h3>Buy One, Get One Free!</h3>
        <p>For a limited time, buy any sports equipment, and get a second one for free. Don't miss out on this fantastic offer to upgrade your gear.</p>
        <button onClick={movetoAbout}>Learn More</button> 
    </div>
                </section>
            <Carousel data-bs-theme="dark" className='positiontype' >
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="https://atsport.com.au/cdn/shop/collections/Bat2.webp?v=1693543168"
          alt="First slide"
        />
        <Carousel.Caption  >
          <h5 className='labelstyle'>"From Beginners to Pro"</h5>
          {/* <p>With their high-quality craftsmanship and innovative technologies, Adidas cricket bats offer excellent performance and durability on the field.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-83229866/83229866.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px",color:"azure", fontWeight:"700", marginRight:"800px", marginBottom:"300px"}}>"Catchy Rackets"</h5>
          {/* <p style={{fontSize:"30px",color:"black", fontWeight:"700", marginRight:"800px", marginBottom:"20px"}}>"Latest Arrivals Till Date"</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F11%2Fadidas-uniforia-euro-2020-ball-reveal-2.jpg?cbr=1&q=90"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{marginLeft:"0px",marginBottom:"10px", color:"Black", fontSize:"50px", fontWeight:"1000"}}>Soccer Gadgets</h5>
          <p style={{marginLeft:"10px",marginBottom:"350px", color:"Black", fontSize:"30px", fontWeight:"800"}}>
            "Explore the best in our Inventory"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

                


          
            </div>

            <footer className="footer">
                <p>&copy; 2024 Sports Store. All rights reserved.</p>
            </footer>
            
        </div>
        
    );
    }

export default Home;