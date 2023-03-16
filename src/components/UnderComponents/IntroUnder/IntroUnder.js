import React from "react";

function IntroUnder() {
  return (
    <>
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
                The menstrual cycle typically lasts between 21 and 35 days, with
                the bleeding phase lasting between 2 and 7 days.
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
    </>
  );
}

export default IntroUnder;
