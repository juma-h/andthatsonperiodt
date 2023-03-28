import React from "react";
import data from "../../../assets/contentData/data.json";
import MenstrualPic from "../../../assets/PNG/menses.jpg";
import FollicularPic from "../../../assets/PNG/follicular.jpg";
import LutealPic from "../../../assets/PNG/luteal.jpg";
import OvulationPic from "../../../assets/PNG/ovulation.jpg";
import ContentCard from "../../ContentCard/ContentCard";
import ContentModal from "../../ContentModal/ContentModal";
import card1 from "../../../assets/PNG/card1.png";
import card2 from "../../../assets/PNG/card2.png";
import card3 from "../../../assets/PNG/card3.png";
import card4 from "../../../assets/PNG/card4.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Phases() {
  const imagesData = [MenstrualPic, FollicularPic, OvulationPic, LutealPic];
  const pastelBackground = ["#B2A4FF", "#FFF2CC", "#BBD6B8", "#FFE1E1"];

  return (
    <>
      <h3 style={{ textAlign: "center", marginBottom: "1em" }}>
        {" "}
        Phases of the Menstrual Cycle
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#8278A1", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #8278A1" }}
          date="During the period – from the time vaginal bleeding starts to the time it ends."
          iconStyle={{
            background: "#8278A1",
            color: "red",
            alignSelf: "center",
            content: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="vertical-timeline-element-title">Menstrual Cycle</h3>
            <h4 className="vertical-timeline-element-subtitle">Phase 1</h4>

            <ContentCard
              title="Menstrual Cycle"
              targetCard="#menstrualCard"
              cardImage={card1}
              backgroundColor="#8278A1"
              textColor="#152336"
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFFDC2", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #FFFDC2" }}
          date="From the start of the period until ovulation."
          iconStyle={{ background: "#FFFDC2", color: "#f7f7f7" }}
          // icon={<i class="fa-regular fa-circle-quarter"></i>}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Follicular Phase
            </h3>
            <h4 className="vertical-timeline-element-subtitle">stage 1</h4>

            <ContentCard
              title="Follicular Phase"
              targetCard="#follicularCard"
              cardImage={card2}
              backgroundColor="#FFFDC2"
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#C8D3B8", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #C8D3B8" }}
          date="About midway through the menstrual cycle, or 13 to 15 days before the start of the next period (14). This can change cycle-to-cycle."
          iconStyle={{ background: "#C8D3B8", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="vertical-timeline-element-title">Ovulation Phase</h3>
            <h4 className="vertical-timeline-element-subtitle">Phase 3</h4>
            <ContentCard
              title="Ovulation Phase"
              targetCard="#ovulationCard"
              cardImage={card3}
              backgroundColor="#C8D3B8"
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FF9F9F", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #FF9F9F" }}
          date=" From ovulation until the start of the next period."
          iconStyle={{ background: "#FF9F9F", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="vertical-timeline-element-title">Luteal Phase</h3>
            <h4 className="vertical-timeline-element-subtitle">Phase 4</h4>
            <ContentCard
              title="Luteal Phase"
              targetCard="#lutealCard"
              cardImage={card4}
              backgroundColor="#FF9F9F"
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {data.map((item, index) => (
        <ContentModal
          key={index}
          modalID={item.modalId}
          modalTitle={item.title}
          contentModal={item.contentText}
          imageModal={imagesData[index]}
          backgroundColor={pastelBackground[index % pastelBackground.length]}
        />
      ))}
    </>
  );
}

export default Phases;
