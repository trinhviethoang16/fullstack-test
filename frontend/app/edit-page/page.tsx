"use client";
import React from "react";
import Link from "next/link";
import BackToList from "../../components/backToList";
import { observer } from "mobx-react";
import Label from "../../components/labelField";
import InputField from "@/components/inputField";

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
              <Label htmlFor="inputEmail4" name="Symbol" />
              <InputField id="inputEmail4" name="Symbol" placeholder="&" />
            </div>
            <div className="col-md-6">
              <Label htmlFor="inputState" name="State" />
              <select id="inputState" className="form-select">
                <option selected>Choose shape</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-6">
              <Label htmlFor="inputEmail4" name="Color" />
              <InputField id="inputEmail4" name="Color" placeholder="#111111" />
            </div>
            <div className="col-md-6">
              <Label htmlFor="inputPassword4" name="Measurement" />
              <InputField
                id="inputPassword4"
                name="Measurement"
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
export default observer(EditPage);
