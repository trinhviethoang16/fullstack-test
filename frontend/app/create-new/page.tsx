"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Shape } from "../../utils/enum";
import DrawFigure from "../../components/drawFigure";
import InputField from "../../components/inputField";
import LabelField from "../../components/labelField";
import SelectField from "../../components/selectField";
import BackToList from "../../components/backToList";

const shapeOptions = [
  { value: Shape.PERFECT_TRIANGLE, label: "Perfect Triangle" },
  { value: Shape.DIAMOND, label: "Diamond" },
  { value: Shape.RECTANGLE, label: "Rectangle" },
];

const CreateNew = () => {
  const [shouldDraw, setShouldDraw] = useState(false);
  const [selectedShape, setSelectedShape] = useState<Shape | undefined>();
  function changeShape(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as Shape;
    setSelectedShape(value);
    setFormData({
      ...formData,
      shape: value,
    });
  }

  const [formData, setFormData] = useState({
    shape: selectedShape,
    color: "",
    symbol: "",
    measurement: 0,
  });

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShouldDraw(true);
    try {
      const response = await fetch(`${process.env.API_URL}/figures/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.error("Draw fail");
      } else {
        alert("Draw successful !!!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="create-new-layout">
      <div className="create-new-content-layout">
        <div className="title-holder">
          <BackToList />
          <div className="create-title col-8">
            <p>Create New Draw</p>
          </div>
          <div></div>
        </div>
        <div className="create-form">
          <form onSubmit={handleFormSubmit} className="row g-3">
            <div className="col-md-6">
              <LabelField htmlFor="symbol" name="Symbol" />
              <InputField
                id="symbol"
                name="symbol"
                placeholder="Ex: &"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-6">
              <LabelField htmlFor="shape" name="State" />
              <SelectField
                name="shape"
                id="shape"
                value={selectedShape}
                options={shapeOptions}
                onChange={changeShape}
              />
            </div>
            <div className="col-md-6">
              <LabelField htmlFor="color" name="Color" />
              <InputField
                id="color"
                name="color"
                placeholder="Ex: #111111"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-6">
              <LabelField htmlFor="measurement" name="Measurement" />
              <InputField
                id="measurement"
                name="measurement"
                placeholder="Ex: 7"
                onChange={handleFieldChange}
              />
            </div>
            {shouldDraw && (
              <DrawFigure
                color={"#" + formData.color}
                symbol={formData.symbol.toString()}
                measurement={formData.measurement}
                shape={formData.shape}
              />
            )}
            <div className="d-flex draw-button">
              <button type="submit" className="draw-btn">
                <span className="draw-btn-text">Draw</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateNew;
