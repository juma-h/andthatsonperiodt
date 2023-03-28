import React from "react";
import "./myths.css";

function MythsMis() {
  return (
    <>
      <div class="myths-container p-2">
        <ul class="myths-cards">
          <li class="myth-card " style={{ background: "#82CD47" }}>
            <div>
              <div class="myth-card-content">
                <h3 style={{ textAlign: "center" }}>
                  Myths and Misconceptions
                </h3>
              </div>
            </div>
          </li>
          <li class="myth-card flip-card" style={{ background: "#DFFFD8" }}>
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>You can’t get pregnant from sex during your period.</h5>
              </div>
            </div>
            <div class="flip-card-back">
              <li>
                Although it is unlikely if you have regular periods, it is still
                possible to get pregnant from sex during your period
              </li>
            </div>
          </li>
          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#C6EBC5" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>
                  One primary worry is that inserting a tampon can break the
                  hymen, which, as popular misconception has it, is a “mark of
                  virginity.”
                </h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li>
                  The hymen is a stretchy membrane that lines the opening of the
                  vagina and does not ordinarily cover the vaginal opening.
                </li>

                <li>
                  If this were the case, the hymen would block menstrual blood
                  and other types of discharge from leaving the body.<br></br>{" "}
                  This would be dangerous, requiring surgical intervention to
                  correct.
                </li>
              </p>
            </div>
          </li>

          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#DFFFD8" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>PMS IS ALL I YOUR HEAD , you're crazy</h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li>
                  {" "}
                  Premenstrual syndrome (PMS) is a real condition that affects
                  nearly 50% of women.
                </li>
                <li>
                  {" "}
                  It makes its appearance a week or two right before your
                  periods.
                </li>
                <li>
                  It could come in the form of mood swings, abdominal pain,
                  breast tenderness, anxiety, and cravings. Some women even
                  experience bouts of clumsiness as a symptom of PMS.
                </li>
              </p>
            </div>
          </li>
          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#76BA99" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>Your period should last exactly one week each month.</h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li>
                  Even if you're always on time, that doesn't mean your period
                  will be. Your body is unique, and so is your monthly cycle.
                </li>
              </p>
            </div>
          </li>
          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#B3FFAE" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>
                  The pain of a period is ‘just like’ anything you’ve
                  experienced
                </h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li>The pain we get during a period is real.</li>
                <li>
                  {" "}
                  We’re not talking about headaches or bumping into sharp
                  corners. Some of us have to take off work and curl up in bed,
                  hoping the pinching cramps will subside because it’s that bad.{" "}
                </li>
                <li> This condition even has a medical name: dysmenorrhea.</li>
              </p>
            </div>
          </li>
          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#C7F2A4" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>Only women get periods</h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li>
                  {" "}
                  Not every woman gets her period and not every female who gets
                  a period considers themselves a woman.
                </li>
                <li>
                  {" "}
                  Transgender men and nonbinary people may get their periods,
                  just as transgender women and nonbinary people might not have
                  periods.
                </li>
                <li>
                  {" "}
                  Menstruation isn’t always just a “woman’s” issue. It’s a human
                  issue.
                </li>
              </p>
            </div>
          </li>
          <li
            class="myth-card flip-card"
            style={{ backgroundColor: "#7FB77E" }}
          >
            <div class="flip-card-front">
              <div class="myth-card-content">
                <h5>Periods are shameful</h5>
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                <li> Do not be ashamed!</li>
                <li> Menstrual Cycle is natural and a part of life!</li>
                <li>
                  {" "}
                  Let’s do our part to change this cycle and ditch the stigma.
                  After all, periods and the balance of hormones are what help
                  us stay young!{" "}
                </li>
                <li>
                  Seriously, periods are part of our body’s answer to slowing
                  aging and even reduce our risks of cardiovascular disease.
                </li>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MythsMis;
