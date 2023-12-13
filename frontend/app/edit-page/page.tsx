import React from 'react';
import Link from 'next/link';
import BackToList from '../../components/backToList';

const EditPage = () => {
    return (
        <div className="edit-layout">
      <div className="edit-content-layout">
        <div className="title-holder">
          <Link className="col-5" href="/draw-list">
            <div className="back-to-list">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_535_14)">
                    <path
                      d="M16.5758 8.24251L3.25322 8.24251L5.74787 5.74787C6.04373 5.45206 6.04373 4.97236 5.74787 4.6765C5.59994 4.52863 5.40605 4.45464 5.21216 4.45464C5.01827 4.45464 4.82438 4.52863 4.6765 4.67655L0.888626 8.46443C0.592768 8.76024 0.592768 9.23994 0.888626 9.5358L4.6765 13.3237C4.97231 13.6195 5.45201 13.6195 5.74787 13.3237C6.04373 13.0279 6.04373 12.5482 5.74787 12.2523L3.25322 9.75767L16.5758 9.75767C16.9942 9.75767 17.3334 9.41847 17.3334 9.00009C17.3334 8.58171 16.9942 8.24251 16.5758 8.24251Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_535_14">
                      <rect
                        width="16.6667"
                        height="16.6667"
                        fill="white"
                        transform="matrix(-1 0 0 -1 17.3334 17.3334)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <BackToList />
            </div>
          </Link>
          <div className="edit-title col-8">
            <p>Edit Draw</p>
          </div>
          <div></div>
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
            <div className="d-flex gap-4" style={{ justifyContent: 'center' }}>
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