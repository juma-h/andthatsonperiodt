import React from "react";
import data from "../../../assets/contentData/data.json";
import MenstrualPic from "../../../assets/PNG/menses.jpg";
import FollicularPic from "../../../assets/PNG/follicular.jpg";
import LutealPic from "../../../assets/PNG/luteal.jpg";
import OvulationPic from "../../../assets/PNG/ovulation.jpg";
import ContentCard from "../../ContentCard/ContentCard";
import ContentModal from "../../ContentModal/ContentModal";
import card1 from "../../../assets/PNG/card1.jpg";
import card2 from "../../../assets/PNG/card2.png";
import card3 from "../../../assets/PNG/card3.png";
import card4 from "../../../assets/PNG/card4.png";

function Phases() {
  const imagesData = [MenstrualPic, FollicularPic, OvulationPic, LutealPic];

  return (
    <>
      <h5>Phases of the Menstrual Cycle</h5>

      <ContentCard
        title="Menstrual Cycle"
        targetCard="#menstrualCard"
        cardImage={card1}
      />
      <ContentCard
        title="Follicular Phase"
        targetCard="#follicularCard"
        cardImage={card2}
      />
      <ContentCard
        title="Ovulation Phase"
        targetCard="#ovulationCard"
        cardImage={card3}
      />
      <ContentCard
        title="Luteal Phase"
        targetCard="#lutealCard"
        cardImage={card4}
      />

      {data.map((item, index) => (
        <>
          <ContentModal
            key={index}
            modalID={item.modalId}
            modalTitle={item.title}
            contentModal={item.contentText}
            imageModal={imagesData[index]}
          />
        </>
      ))}
    </>
  );
}

export default Phases;
