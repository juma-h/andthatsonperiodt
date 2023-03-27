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
} from "../../components";
import "./under.css";

function Under18() {
  return (
    <div>
      <div className="container-wrapper">
        <Controller>
          <Scene>
            <div className="under-intro row mt-1">
              <WebIntro />
            </div>
          </Scene>

          <Scene>
            <div className="under-one" id="section2">
              <IntroUnder />
            </div>
          </Scene>

          <Scene>
            <div className="under-two row">
              <Phases />
            </div>
          </Scene>

          <Scene>
            <div className="under-three">
          
              <PMS />
            </div>
          </Scene>

          <Scene>
            <div className="under-four">
              <MenstrualDiseases />
            </div>
          </Scene>
          <div className="under-five">
            <div class="row">
            <div class="col-md-7"> <BirthControlMethods /></div>
            <div class="col-md-5">

            </div>
            </div>
          
           
          </div>

          <Scene>
            <div className="under-six">
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
