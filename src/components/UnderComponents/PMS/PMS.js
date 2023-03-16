import React from "react";

function PMS() {
  const src = "https://youtu.be/qWVONBzOWNQ";
  return (
    <div className="row">
      <div className="col-md-6 p-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qWVONBzOWNQ"
          title="PMS & It's Symptoms"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="col-md-6 p-5">
        <h5>PMS and Everything</h5>
        {/* <p>A group of symptoms that occur in women, typically between ovulation and a period. The symptoms are: </p>
        <ul>
            <li>

            </li>
        </ul> */}
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
            >
              Emotional and behavioral signs and symptoms
            </button>
            <button
              class="nav-link warning"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
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
              <ol>
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
              </ol>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <li>
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
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMS;
