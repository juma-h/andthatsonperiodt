import React from "react";
import "./periodshygiene.scss";

function PeriodHygiene() {
  return (
    <>
      <div class="hygiene-container" style={{marginTop:"5em"}}>
        <div class="overlay">
          <div class="items"></div>
          <div class="items head">
            <p>Periods Hygiene</p>
            <hr></hr>
          </div>
          <div class="items price">
            <a
              href="https://www.cdc.gov/hygiene/personal-hygiene/menstrual.html"
              target="_blank"
              class="btn btn-warning"
          
              role="button"
            >
              Learn More
            </a>
          </div>
          <div class="items cart">
            {/* <i class="fa fa-shopping-cart"></i>
            <span>ADD TO CART</span> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PeriodHygiene;
