import React from "react";
// import "./under.scss";
import "./webintro.css";

function WebIntro() {
  return (
    <>
      <div className="intro-intro row">
    
        {/* <h4 className="line-1 anim-typewriter">andthatsonperiodt.</h4> */}
        <h6 className="col-md-6 web-info">
            This is a menstrual health website with the goal of improving
            general information for everyone! Let us put an end to period
            shame and stigma. We think that everyone has the right to reliable
            and empowering knowledge about their bodies and cycles.
            <br></br>You've come to the correct spot whether you're seeking
            for period management advice, want to learn more about the science
            of menstruation, or want to anything.
          </h6>
      
         <a href="#section1" className="dropdown-arrow">
          <i class="fa-solid fa-arrow-down fa-2xl"> </i>
       </a>
      </div>
    </>
  );
}

export default WebIntro;
