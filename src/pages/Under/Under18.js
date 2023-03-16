import React from "react";
import {
  Footer,
  MenstrualDiseases,
  Phases,
  PMS,
  IntroUnder,
} from "../../components";
import "./under.css";
import "./under.scss";

function Under18() {
  return (
    <div>
      <div className="under-intro mt-1">
        <div className="row">
          <div>
            <h4 className="intro-header">
              This is a menstrual health website with the goal of improving
              general information for everyone! Let us put an end to period
              shame and stigma. We think that everyone has the right to reliable
              and empowering knowledge about their bodies and cycles.
              <br></br>You've come to the correct spot whether you're seeking
              for period management advice, want to learn more about the science
              of menstruation, or want to anything.
            </h4>
          </div>

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

          <div>
            <a href="#section2" className="dropdown-arrow">
              Learn More Below
              <i className="fa fa-angle-down"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="under-one" id="section2">
        <IntroUnder />
      </div>

      <div className="under-two row">
        <Phases />
      </div>
      <div className="under-three">
        {" "}
        <PMS />
      </div>
      <div className="under-four">
        <MenstrualDiseases />
      </div>
      <div className="under-five"> Div 5</div>

      <div className="footer-under">
        <Footer />
      </div>
    </div>
  );
}

export default Under18;
