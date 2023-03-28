import React from "react";
import "./pms.scss";

function PMS() {
  return (
    <div className="row">
      <div className="col-md-7 p-5 youtube-vid" >
        <iframe
        class="framed" 
          width="800"
          height="400"
          src="https://www.youtube.com/embed/qWVONBzOWNQ"
          title="PMS & It's Symptoms"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          controls
          // style="border: 1px solid black;"
        ></iframe>
      </div>
      <div className="col-md-5 p-5">
        <h3>PMS and its Symptoms</h3>
        <div class="d-flex align-items-center">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              style={{backgroundColor:"#559A5C", color:"white"}}
            >
              Emotional and behavioral signs and symptoms
            </button>
            <button
              class="nav-link warning mt-3"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              style={{backgroundColor:"#559A5C", color:"white"}}
            >
              Physical Signs & Symptoms
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <ul>
                <li>Tension or anxiety</li>
                <li>Depressed mood</li>
                <li>Crying spells</li>
                <li>Mood swings and irritability or anger</li>
                <li>Appetite changes and food cravings</li>
                <li>Trouble falling asleep (insomnia)</li>
                <li>Social withdrawal</li>
                <li>Poor concentration</li>
                <li>Change in libido</li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <ul>
                <li>Joint or muscle pain</li>
                <li>Headache</li>
                <li>Fatigue</li>
                <li>Weight gain related to fluid retention</li>
                <li>Abdominal bloating</li>
                <li>Breast tenderness</li>
                <li>Acne flare-ups</li>
                <li>Constipation or diarrhea</li>
                <li>Alcohol intolerance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMS;
