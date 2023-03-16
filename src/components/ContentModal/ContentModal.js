import React from "react";

function ContentModal(props) {
  return (
    <>
      <div
        class="modal fade"
        id={props.modalID}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {props.modalTitle}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body row">
              <div className="col-md-6">
                <ul>
                  <li> {props.contentModal}</li>
                </ul>
              </div>
              <div className="col-md-6">
               
                <img
                  style={{ height: "400px", width: "500px" }}
                  src={props.imageModal}
                  alt="modal-img"
                />
                 <figcaption>Image description</figcaption>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentModal;
