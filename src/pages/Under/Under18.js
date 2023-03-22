import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import {
  Footer,
  MenstrualDiseases,
  Phases,
  PMS,
  IntroUnder,
  WebIntro,
  ReactMaps
} from "../../components";
import "./under.css";

function Under18() {
  return (
    <div>
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
            {" "}
            <PMS />
          </div>
        </Scene>
        
        <Scene>
          <div className="under-four">
            <MenstrualDiseases />
          </div>
        </Scene>
        <div className="under-five"> Div 5</div>
        <div className="under-six"> 
        <ReactMaps/>
        </div>

        <div className="footer-under">
          <Footer />
        </div>
      </Controller>
    </div>
  );
}

export default Under18;
