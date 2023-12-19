"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAPI } from "@/API/user";
import axios from "axios";
import { observer } from "mobx-react";
import LabelField from "@/components/labelField";

const Home = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const { email, password } = formData;
  //   try {
  //     const response = await UserAPI.loginUser({ email, password });
  //     const { token } = response.data;
  //     localStorage.setItem("token", token);
  //     router.push("/draw-list");
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       alert("Email or password is incorrect. Please try again.");
  //     } else {
  //       console.error("An unexpected error occurred:", error);
  //     }
  //   }
  // }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.API_URL || 'http://localhost:3001'}/users/create`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const userData = await response.json();
        const { email, password } = formData;
        const user = userData.find((u: any) => u.email === email && u.password === password);
        if (user) {
          router.push('/draw-list');
        } else {
          alert('Email or password is incorrect. Please try again.');
        }
      } else {
        alert('Login fail ! Please try again');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-layout">
        <div className="login-content-layout">
          <div className="login-form">
            <div className="login-title">Login</div>
            <div className="mb-3">
              <LabelField htmlFor="email" name="Email" className="login-text mb-2"/>
              <input
                type="email"
                className="form-control w-full"
                onChange={handleChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
              <span className="input-error"></span>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="login-text mb-2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Password
                <a href="#" className="forgot-password">
                  {" "}
                  Forgot password?
                </a>
              </label>
              <input
                type="password"
                className="form-control w-full"
                id="password"
                placeholder=". . . . . . "
                name="password"
                onChange={handleChange}
              />
              <span className="input-error"></span>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <LabelField htmlFor="exampleCheck1" name="Remember Me" />
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <button type="submit" id="btn-login" className="login-btn">
                <span className="login-btn-text">Login</span>
              </button>
            </div>
            <p style={{ textAlign: "center" }}>
              <span className="text">You don&apos;t have an account? </span>
              <Link href="/signup">
                <span className="blue-text"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
export default observer(Home);