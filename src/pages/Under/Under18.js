import React from "react";
import { Footer, MenstrualDiseases, Phases ,PMS } from "../../components";

import "./under.css";

function Under18() {
  return (
    <div>
      <div className="under-intro mt-1">
        <h4>
          This is a shame free website that aims to improve general education
          for all and sundry! Let's end period shaming and stigma.
        </h4>
        <br></br>
        <a href="#section2" className="dropdown-arrow">
          Learn More Below
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
      <div className="under-one" id="section2">
        <div className="col-md-7">
          <div
            class="card"
            style={{ width: "auto", background: "none", margin: "1em" }}
          >
            <div class="card-body">
              <h5 class="card-title">What is the Menstrual Cycle?</h5>
              <h6 class="card-subtitle mb-2 text-muted">Intro to menses</h6>
              <ul>
                <li>
                  Menstruation is a natural process that happens to girls and
                  women as a part of their reproductive cycle. It involves the
                  shedding of the lining of the uterus through the vagina, which
                  typically occurs once a month.
                </li>
                <li>
                  {" "}
                  Menstruation typically begins between the ages of 9 and 16,
                  although the exact age can vary from person to person.
                </li>
                <li>
                  The menstrual cycle typically lasts between 21 and 35 days,
                  with the bleeding phase lasting between 2 and 7 days.
                </li>
              </ul>
              <h6>What happens in each stage?</h6>
              <p>We have four phases of our cycle. These are :</p>
              <li>Menstrual Phase</li>
              <li>Follicular Phase</li>
              <li>Ovulation Phase</li>
              <li>Luteal Phase</li>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            {" "}
            <img src="" alt="alt-pic-here" />
          </div>
        </div>
      </div>

      <div className="under-two row">
        <Phases />
      </div>
      <div className="under-three">
        {" "}
        <PMS />
      </div>
      <div className="under-four"> 
      <MenstrualDiseases/>
      </div>
      <div className="under-five"> Div 5</div>
 
      <div className="footer-under">
        <Footer />
      </div>
    </div>
  );
}

export default Under18;
