import React from "react";
import familyPlan from "../../../assets/PNG/family1.png";
import birthControl from "../../../assets/PNG/BirthControl.jpg";
import "./birthcontrol.css";

function BirthControlMethods() {
  return (
    <div className="birth-wrapper">
      <h3>Birth Control Methods</h3>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
        style={{ height: "90%" }}
      >
        <div class="carousel-indicators" style={{}}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row implant">
              <div class="control-container">
                <div class="control-card">
                  <h2>Birth Control Implant</h2>
                  <ul>
                    <li>
                      The birth control implant is a tiny, thin rod about the
                      size of a matchstick.
                    </li>
                    <li>
                      It’s also called Nexplanon. A doctor inserts the implant
                      under the skin of your upper arm.{" "}
                    </li>
                    <li>
                      It releases the hormone progestin to stop you from getting
                      pregnant. It is 99% effective and can last up to 5 years.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="iud-container">
                <div class="control-card">
                  <h2>Intrauterine contraceptive device (IUD, IUCD)</h2>
                  <ul>
                    <li>
                      An IUD is a tiny device that’s put into your uterus to
                      prevent pregnancy.
                    </li>
                    <li>
                      It’s long-term(3-12 years), reversible, and one of the
                      most effective birth control methods out there.
                    </li>
                    <li>
                      There are two types <em>copper</em> and <em>hormonal.</em>
                      hormonal. Both copper IUDs and hormonal IUDs prevent
                      pregnancy by changing the way sperm cells move so they
                      can’t get to an egg.
                    </li>
                    <li>
                      Sperm doesn’t like copper, so the IUD makes it almost
                      impossible for sperm to get to that egg.
                    </li>
                    <li>The hormonal ones work in two ways:</li>
                    <li>
                      They thicken the mucus that lives on the cervix, which
                      blocks and traps the sperm
                    </li>
                    <li>
                      the hormones also sometimes stop eggs from leaving your
                      ovaries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="depo-container">
                <div class="control-card">
                  <h2>Depo Shot</h2>
                  <ul>
                    <li>
                      The depo shot (AKA Depo-Provera) is an injection you get
                      once every 3 months.
                    </li>
                    <li>
                      It contains the hormone progestin.Progestin stops you from
                      getting pregnant by preventing ovulation.
                    </li>
                    <li>
                      It also works by making cervical mucus thicker. When the
                      mucus on the cervix is thicker, the sperm can’t get
                      through. It is 94% effective.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="condom-container">
                <div class="control-card">
                  <h2>Condoms</h2>

                  <ul>
                    <li>It is 85% effective and protects you against STD’S</li>
                    <li>
                      There are also internal condoms. Instead of going on the
                      penis, internal condoms go inside your vagina for
                      pregnancy prevention or into the vagina or anus for
                      protection from STDs.
                    </li>
                    <li>
                      For a long time they were called “female condoms.”
                      However, people of any gender can use them for vaginal or
                      anal sex.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="pills-container">
                <div class="control-card">
                  <h2>Every Day Pills</h2>

                  <ul>
                    <li>
                      Birth control pills are a kind of medicine with hormones.{" "}
                    </li>
                    <li>
                      Birth control pills come in a pack, and you take 1 pill
                      every day.
                    </li>
                    <li>
                      The pill is safe, affordable, and effective if you always
                      take your pill on time. It is 91% effective.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="chill-container">
                <div class="control-card">
                  <h2>Abstinence & Outercourse</h2>

                  <ul>
                    <li>
                      Abstinence is when you don’t have sex while outercourse is
                      other sexual activities besides vaginal sex.
                    </li>
                    <li>
                      Some choose outercourse as a safe sex alternative. They
                      put boundaries around any activity that can cause
                      pregnancy or transmit sexually transmitted infections
                      (STIs).
                    </li>
                    <li>Abstaining is 100% effective.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row implant">
              <div class="chill-container">
                <div class="control-card">
                  <h2>Effects of Birth Control</h2>
                  <ul>
                    <li>bleeding or spotting between periods</li>
                    <li>bloating</li>
                    <li>blood pressure above your usual range</li>
                    <li>depression</li>
                    <li>fatigue</li>
                    <li>feeling dizzy</li>
                    <li>fluid retention</li>
                    <li>headache</li>
                    <li>increased appetite</li>
                    <li>insomnia</li>
                    <li>melasma (dark patches on the face)</li>
                    <li>mood swings</li>
                    <li>nausea</li>
                    <li>tenderness or pain in the breasts</li>
                    <li>vomiting</li>
                    <li>weight gain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default BirthControlMethods;
