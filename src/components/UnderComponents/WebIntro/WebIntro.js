import React from "react";
import "./under.scss";
import "./webintro.css";
import videoBack from "../../../assets/video/intro.mp4"


function WebIntro(){
    return (
      <>
      <div className="web-intro-video">
        <video autoPlay loop muted>
          <source src={videoBack} type="video/mp4" />
        </video>
        <div className="intro-intro">
          <h4 className="line-1 anim-typewriter">andthatsonperiodt.</h4>
          <h6 className="web-info">
            This is a menstrual health website with the goal of improving
            general information for everyone! Let us put an end to period
            shame and stigma. We think that everyone has the right to reliable
            and empowering knowledge about their bodies and cycles.
            <br></br>You've come to the correct spot whether you're seeking
            for period management advice, want to learn more about the science
            of menstruation, or want to anything.
          </h6>

          <div className="text-div">
            <h1>Thank you for visiting our </h1>
            <h1 class="playful" aria-label="Thank you">
              <span aria-hidden="true">w</span>
              <span aria-hidden="true">e</span>
              <span aria-hidden="true">b</span>
              <span aria-hidden="true">s</span>
              <span aria-hidden="true">i </span>
              <span aria-hidden="true">t</span>
              <span aria-hidden="true">e</span>
              <span aria-hidden="true">!</span>
              <span aria-hidden="true"> 😊</span>
            </h1>
          </div>
          <a href="#section2" className="dropdown-arrow">
            <i class="fa-solid fa-arrow-down 2x"> Learn More</i>
          </a>
        </div>
      </div>
    </>
    )

}

export default WebIntro;