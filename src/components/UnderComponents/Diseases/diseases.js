import { useRef, useEffect } from "react";
import "./diseases.css";

function MenstrualDiseases() {
  // create a reference to the wrapper div
  // const wrapperRef = useRef();

  // // set the speed of scrolling (in milliseconds)
  // const scrollSpeed = 3000;

  // // get the height of one card
  // const cardHeight = wrapperRef.current
  //   ? wrapperRef.current.querySelector(".card").offsetHeight
  //   : 0;

  // // set the initial position of the wrapper div
  // let currentPos = 0;

  // // create a function to move the wrapper div
  // const moveWrapper = () => {
  //   // calculate the new position of the wrapper div
  //   currentPos -= cardHeight;

  //   // animate the wrapper div to the new position
  //   wrapperRef.current.style.transform = `translateY(${currentPos}px)`;

  //   // when animation is complete, check if the wrapper div has reached the end
  //   if (
  //     currentPos <=
  //     -wrapperRef.current.offsetHeight +
  //       wrapperRef.current.parentElement.offsetHeight
  //   ) {
  //     // if so, reset its position to the top
  //     currentPos = 0;
  //     wrapperRef.current.style.transform = `translateY(${currentPos}px)`;
  //   }
  // };

  // call the moveWrapper function every scrollSpeed milliseconds
  // useEffect(() => {
  //   const intervalId = setInterval(moveWrapper, scrollSpeed);
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-8 p-5">
          <h5>Common menstrual problems</h5>
          <p> Some of the menstrual issues had by girls all over are :</p>
          <li>
            Dysmenorrhoea – or painful periods. It is thought that the uterus is
            prompted by certain hormones to squeeze harder than necessary to
            dislodge its lining.
          </li>
          <li>
            {" "}
            Menorrhagia is heavy bleeding, including prolonged menstrual periods
            or excessive bleeding during a normal-length period.
          </li>
          <li>
            {" "}
            Metrorrhagia is bleeding at irregular intervals, particularly
            between expected menstrual periods
          </li>
          <li>Amenorrhea is the absence of menstruation.</li>
          <li>
            Oligomenorrhea refers to infrequent menstrual periods. Hypomenorrhea
            refers to light periods.
          </li>
        </div>
        <div className="aside-div col-md-4 p-5">
          <aside>
            <p> If anything please see a doctor, gynaecologist</p>
            <div class="container">
              <ul class="cards">
                <li class="card">
                  <div>
                    <h3 class="card-title">Service 1</h3>
                    <div class="card-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a href="" class="card-link">
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Service 2</h3>
                    <div class="card-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab repudiandae magnam harum natus fuga et repellat in
                        maiores.
                      </p>
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a href="" class="card-link">
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Service 3</h3>
                    <div class="card-content">
                      <p>
                        Phasellus ultrices lorem vel bibendum ultricies. In
                        hendrerit nulla a ante dapibus pulvinar eu eget quam.
                      </p>
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a href="" class="card-link">
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Service 4</h3>
                    <div class="card-content">
                      <p>
                        Aenean posuere mauris quam, pellentesque auctor mi
                        bibendum nec. Sed scelerisque lacus nisi, quis auctor
                        lorem ornare vel.
                      </p>
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a href="" class="card-link">
                      Learn More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default MenstrualDiseases;
