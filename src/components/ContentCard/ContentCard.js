import React from "react";

function ContentCard(props) {
  return (
    <>
      <div className="col-md-3">
        <div class="card" style={{ width: "18rem", alignItems: "center" }}>
          <img
            src={props.cardImage}
            style={{ height: "200px", width: "200px" }}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.content}</p>
          </div>
          <div>
            <button
              class="btn btn-secondary m-3"
              data-bs-toggle="modal"
              data-bs-target={props.targetCard}
            >
              Click for more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCard;
