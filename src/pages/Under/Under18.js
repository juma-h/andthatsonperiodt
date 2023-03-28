import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import {
  Footer,
  MenstrualDiseases,
  Phases,
  PMS,
  IntroUnder,
  WebIntro,
  ReactMaps,
  BirthControlMethods,
  PeriodHygiene,
} from "../../components";
import "./under.css";


function Under18() {
  return (
    <div>
  
      <div className="container-wrapper">
        <Controller>
          <Scene>
            <div className="under-intro row">
              <WebIntro />
            </div>
          </Scene>

          <Scene>
            <div className="under-one" id="section1">
              <IntroUnder />
            </div>
          </Scene>

          <Scene>
            <div className="under-two row" id="section2">
              <Phases />
            </div>
          </Scene>

          <Scene>
            <div className="under-three" id="section3">
              <PMS />
            </div>
          </Scene>

          <Scene>
            <div className="under-four" id="section4">
              <MenstrualDiseases />
            </div>
          </Scene>

          <div className="under-five" id="section5">
            <div class="row">
              <div class="col-md-7">
                <BirthControlMethods />
              </div>
              <div class="col-md-5 periodgy">
                <PeriodHygiene />
              </div>
            </div>
          </div>

          <Scene>
            <div className="under-six" id="section6">
              <ReactMaps />
            </div>
          </Scene>

          <Scene>
            <div className="footer-under">
              <Footer />
            </div>
          </Scene>
        </Controller>
      </div>
    </div>
  );
}

export default Under18;
