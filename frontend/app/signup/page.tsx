"use client";
import Link from "next/link";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAPI } from "../../API/user/index";
import { StatusResponse } from "../../utils/enum";
import { observer } from "mobx-react";
import LabelField from "@/components/labelField";
import InputField from "@/components/inputField";

const SignUp = () => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }
    try {
      const response = await UserAPI.createUser(formData);
      alert("Sign up successful");
      if (response.data.status === StatusResponse.SUCCESS) {
        alert("Sign up successful");
        router.push("/");
      } else if (response.data.status === StatusResponse.BAD_REQUEST) {
        alert("Email already exists");
      } else {
        console.error("Sign up fail");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="signup-layout">
      <div className="signup-content-layout">
        <div className="signup-form">
          <div className="signup-title">
            <p>Sign Up</p>
          </div>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <LabelField htmlFor="firstName" name="First name" />
              <InputField
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="col-md-6">
              <LabelField htmlFor="lastName" name="Last name" />
              <InputField
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="col-12">
              <LabelField htmlFor="email" name="Email" />
              <InputField
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="col-12">
              <LabelField htmlFor="password" name="Password" />
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder=". . . . . . ."
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="col-12">
              <LabelField htmlFor="confirmPassword" name="Confirm Password" />
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder=". . . . . . ."
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <button type="submit" id="btn-register" className="signup-btn">
                <span className="signup-btn-text">Sign Up</span>
              </button>
            </div>
            <p style={{ textAlign: "center" }}>
              <span className="text">Already have an account? </span>
              <Link href="/">
                <span className="blue-text"> Log in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default observer(SignUp);
