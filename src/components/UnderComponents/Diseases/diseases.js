import { useRef, useEffect } from "react";
import "./diseases.css";
import pads from "../../../assets/PNG/menstrualpad.png";
import tampons from "../../../assets/PNG/tampons.png";
import periodpanties from "../../../assets/PNG/periodpanties.png";
import resuable from "../../../assets/PNG/reusablepads.png";
import cups from "../../../assets/PNG/menstrualcups.png";
import periodproducts from "../../../assets/PNG/periodproducts.png";

function MenstrualDiseases() {
  return (
    <>
      <div className="row">
        <div className="col-md-8 p-5">
          <h3>Common menstrual problems</h3>
          <p> Some of the menstrual issues had by women all over are :</p>
          <li>
            Dysmenorrhoea or painful periods. It is thought that the uterus is
            prompted by certain hormones to squeeze harder than necessary to
            dislodge its lining.
          </li>
          <li>
          
            Menorrhagia is heavy bleeding, including prolonged menstrual periods
            or excessive bleeding during a normal-length period.
          </li>
          <li>
           
            Metrorrhagia is bleeding at irregular intervals, particularly
            between expected menstrual periods
          </li>
          <li>Amenorrhea is the absence of menstruation.</li>
          <li>
            Oligomenorrhea refers to infrequent menstrual periods. Hypomenorrhea
            refers to light periods.
          </li>
          <li>
            PCOS , A hormonal disorder causing enlarged ovaries with small cysts
            on the outer edges. The cause of polycystic ovary syndrome isn't
            well understood, but may involve a combination of genetic and
            environmental factors. Symptoms include menstrual irregularity,
            excess hair growth, acne and obesity.
          </li>
        </div>
        <div className="aside-div col-md-4 p-5">
          <aside>
            <div class="container">
              <ul class="cards">
                <li class="card">
                  <div>
                    <h3
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                      }}
                      class="card-title"
                    >
                      Sanitary Products
                    </h3>
                  </div>
                  <div class="card-content">
                    <img
                      class="product-img"
                      src={periodproducts}
                      alt="product"
                    />
                  </div>
                  <div class="card-link-wrapper">
                    <a href="" class="card-link">
                      More information below
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Sanitary Pads</h3>
                    <div class="card-content">
                      <img class="product-img" src={pads} alt="product" />
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a
                      href="https://fsastore.com/learn-6-types-of-period-products-know-your-options.html#:~:text=Sanitary%20pads%E2%80%94a,lot%20of%20waste"
                      target="_blank"
                      class="card-link"
                    >
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Tampons</h3>
                    <div class="card-content">
                      <img class="product-img" src={tampons} alt="product" />
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a
                      href="https://www.ippf.org/blogs/period-products-what-are-options#:~:text=In%20terms%20of,your%20menstrual%20flow."
                      target="_blank"
                      class="card-link"
                    >
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Menstrual Cups</h3>
                    <div class="card-content">
                      <img class="product-img" src={cups} alt="product" />
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a
                      href="https://www.nhsinform.scot/healthy-living/womens-health/girls-and-young-women-puberty-to-around-25/periods-and-menstrual-health/choosing-period-products#:~:text=Menstrual%20cups%20are,shock%20syndrome."
                      target="_blank"
                      class="card-link"
                    >
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Periods Panties</h3>
                    <div class="card-content">
                      <img
                        class="product-img"
                        src={periodpanties}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a
                      href="https://www.nhsinform.scot/healthy-living/womens-health/girls-and-young-women-puberty-to-around-25/periods-and-menstrual-health/choosing-period-products#:~:text=Periods%20pants%20are,can%20compare%20prices."
                      target="_blank"
                      class="card-link"
                    >
                      Learn More
                    </a>
                  </div>
                </li>
                <li class="card">
                  <div>
                    <h3 class="card-title">Reusable Pads</h3>
                    <div class="card-content">
                      <img class="product-img" src={resuable} alt="product" />
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <a
                      href="https://www.india.com/lifestyle/what-are-reusable-menstrual-pads-here-is-everything-you-wanted-know-about-reusable-cloth-pads-2078827/"
                      target="_blank"
                      class="card-link"
                    >
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
