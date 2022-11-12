import React from 'react'
import "./Homepage.css"
import rabbit from "../src/utils/rabbiticon.png"
import { Button} from '@chakra-ui/react'
import emailicon from "../src/utils/email.svg"
import man from "../src/utils/man.png";
import gendericon from "../src/utils/gendericon.png"
import dateicon from "../src/utils/dateicon.png";
import locationicon from "../src/utils/locationicon.png";
import call from "../src/utils/call.png";
import girl from "../src/utils/girlimg.svg";

import oval from "../src/utils/Oval.png"
import oval2 from "../src/utils/oval2.png"
import star from "../src/utils/star.png";
import chaand from "../src/utils/chaand.png"
import dot from "../src/utils/dot.png"
import silver from "../src/utils/silver.png"
import silverdot from "../src/utils/silverdot.png"
import glass from "../src/utils/glassicon.png";
import diamond from "../src/utils/diamondicon.png";
import likeicon from "../src/utils/likeicon.png";
import hearticon from "../src/utils/hearticon.png";
import hollowheart from "../src/utils/hollowheart.png";

export const Homepage = () => {
  return (
    <>
    <div id='container'>
      
        <div id="navbar">
            <div className="nav-left-div">
               <img src={rabbit} alt="" />
                Datify
            </div>

            <div className='nav-middle-div'>
                <div>Home</div>
                <div className='mid-div-subchild'>Members</div>
                <div className='mid-div-subchild'>Blog</div>
                <div className='mid-div-subchild'>Privacy</div>
                <div className='mid-div-subchild'>Contact</div>
            </div>
            <div className='nav-right-div'>
                <div>Login</div>
                <div>Register</div>
            </div>
        </div>

        <div id='second-container'>
            <div id='second-container-left'>
               <div>Because you deserve better</div>
               <div>Get noticed for <span className='orange'>who &nbsp;&nbsp;
               </span> you are,<span className='orange'>not what</span> you look like.</div>
               <div>You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</div>
               <div>
                    <img src={emailicon} alt="" />
                     <div>enter your email</div> 
                    <button>Get Started</button>
               </div>
               <div id='fifthdiv'>
                <div>
                    <div>15k+</div>
                    <div>Dates and matches made everyday</div>
                </div>
                <div>
                    <div>1,456</div>
                    <div>New members signup every day</div>
                </div>
                <div>
                    <div>1M+</div>
                    <div>Members from around the world</div>
                </div>
               </div>

            </div>
            <div id='second-container-right'>
                <img style={{width:"30px",height:"30px",marginTop:"250px"}} src={glass} alt="" />
                <img style={{width:"60px",height:"60px",marginTop:"50px",marginLeft:"110px"}} src={diamond} alt="" />
                <img style={{width:"30px",height:"30px",marginTop:"50px",marginLeft:"390px"}} src={likeicon} alt="" />
                <img style={{width:"60px",height:"60px",marginTop:"220px",marginLeft:"530px"}} src={hearticon} alt="" />
                <img style={{width:"60px",height:"60px",marginTop:"480px",marginLeft:"556px"}} src={hollowheart} alt="" />
                <img src={man} alt="" />
                <div id='sub-container'>
                    <div id='sub-container-left'>
                        <div id='sub-container-left-firstdiv'>
                            <div className='gender'>
                                 <img src={gendericon} alt="" />
                                 <p>Male</p> 
                            </div>
                            <div className='age'>
                            <img src={dateicon} alt="" />
                                 <p>30-35 Years</p> 
                            </div>
                            <div className='location'>
                            <img src={locationicon} alt="" />
                                 <p>USA</p> 
                            </div>
                        </div>
                        <div id='sub-container-left-seconddiv'>
                            <div>
                             <img src={girl} alt="" />
                             </div>
                             <div>
                             <p>Angela Taylor</p>
                             <p>Cincinati, Oh</p>
                             </div>
                             <div className='select'><p>Select</p></div>
                        </div>
                        <div id='sub-container-left-thirddiv'>
                        
                            <div>
                             <img src={call} alt="" />
                             </div>
                             <div>
                                <p>Angela Taylor</p>
                                <p>Cincinati, Oh</p>
                             </div>
                             <div className='select'>
                                <p>Select</p>
                            </div>
                        </div>
                        
                    </div>
                    <div id='sub-container-right'>
                        <div id='incard'>
                        <div className='cardnumber'>
                            <div id='ovaldiv'>
                                <img  id="oval" src={oval} alt="" />
                                <img  id="oval2" src={oval2} alt="" />
                                <img  id="silver" src={silver} alt="" />
                            </div>
                        <img  id="star" src={star} alt="" />
                            <p>CARD NUMBER</p>
                            <h2>3829 &nbsp;4820&nbsp;4629&nbsp; 5025</h2>
                        </div>
                        <img  id="chaand" src={chaand} alt="" />
                         <div className='card'>
                            <div>
                                <p>CARD HOLDER NAME</p>
                                <h2>Anita Rose</h2>
                            </div>
                            <div>
                                <p>VAID THRU</p>
                                <h2>09/17</h2>
                            </div>

                         </div>
                         </div>
                        
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
