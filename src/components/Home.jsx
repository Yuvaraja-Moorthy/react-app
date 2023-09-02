import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>Techy Aot</h1>
            <p>Solution to all your problems is HERE:</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
    <div>
    <p>
    Each countries numerous laws have so much impact on how High Tech startups operate 
    and behave that they can go out of business (Joyner & Payne, 2002). The effects of
     regulations can range from the ease of doing business to the protection of trade secrets.
      For example, due to the expected decrease in workers numbers and number of business startups, 
      the U.S. is looking to reform its immigration regulations to attract more highly-skilled employees
       in science and technology in hopes to compete with Singapore (PR Web Newswire, 2012). 

    </p>
    </div>
    </div>

    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci leo, vestibulum nec lectus sit amet, luctus elementum nisi. Nunc sed nunc turpis. Donec porttitor vulputate faucibus. Nam dictum, risus nec bibendum suscipit, augue erat porta est, eget ornare diam quam dignissim mi. Donec quis justo ac arcu lobortis finibus at eu nisl. Aenean pulvinar, diam et efficitur rhoncus, metus dolor dignissim sem, ut aliquet lorem nisi id nulla. Ut sagittis augue nulla, vehicula fermentum risus aliquet ut.
um neque sem, ullamcorper et facilisis sed, convallis sed elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In elementum, arcu eu hendrerit commodo, orci massa venenatis tellus, nec ultrices ipsum justo et dui. Cras luctus volutpat elementum.
Cras laoreets of Lorem Ipsum</p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
              animationDelay: "0.3s",
          }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
          <div style={{
              animationDelay: "0.5s",
          }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>
          <div style={{
              animationDelay: "0.75s",
          }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
          <div style={{
              animationDelay: "1s",
          }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

    </>

  )
}

export default Home