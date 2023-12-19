import React from "react";
import Link from "next/link";
import BackToList from "../../components/backToList";

const EditPage = () => {
  return (
    <div className="edit-layout">
      <div className="edit-content-layout">
        <div className="title-holder">
          <BackToList />
          <div className="edit-title col-8">
            <p>Edit Draw</p>
          </div>
        </div>
        <div className="edit-form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Symbol
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="&"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose shape</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Ex: #111111"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Measurement
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="7"
              />
            </div>
            <div className="d-flex gap-4" style={{ justifyContent: "center" }}>
              <button type="submit" className="draw-btn">
                <span className="draw-btn-text">Cancel</span>
              </button>
              <button type="submit" className="draw-btn">
                <span className="draw-btn-text">Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPage;
