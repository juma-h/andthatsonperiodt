import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 18rem;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 8px;
`;


const CardImage = styled.img`
  height: 200px;
  width: 200px;
`;

const ViewButton = styled.button`
background-color: "#BCCEF8";

`

function ContentCard(props) {
  return (
    <div className="col-md-3">
      <CardContainer
        backgroundColor={props.backgroundColor}
        textColor={props.textColor}
      >
        <CardImage src={props.cardImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
        </div>
        <div>
          <button
            class="btn btn-secondary m-3"
            data-bs-toggle="modal"
            data-bs-target={props.targetCard}
            style={{backgroundColor:"#BCCEF8", border:"none", color: "#152336"}}
          >
            Click for more
          </button>
        </div>
      </CardContainer>
    </div>
  );
}

export default ContentCard;
