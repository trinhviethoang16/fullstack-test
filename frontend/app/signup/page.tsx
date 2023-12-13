"use client";
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password !== confirmPassword) {
    alert('Password and confirm password do not match');
    return;
  }

    try {
      const response = await fetch(`${process.env.API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Sign up successful');
        router.push('/');
      } else {
        console.error('Sign up fail');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
      <div className="signup-layout">
    <div className="signup-content-layout">
      <div className="signup-form">
        <div className="signup-title">
          <p>Sign Up</p>
        </div>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <span className="input-error"></span>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            <span className="input-error"></span>
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <span className="input-error"></span>
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder=". . . . . . ."
              onChange={handleChange}
            />
            <span className="input-error"></span>
          </div>
          <div className="col-12">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder=". . . . . . ."
              name="confirmPassword"
              onChange={handleChange}
            />
            <span className="input-error"></span>
          </div>
          <div className="d-flex" style={{ justifyContent: 'center' }}>
            <button type="submit" id="btn-register" className="signup-btn">
              <span className="signup-btn-text">Sign Up</span>
            </button>
          </div>
          <p style={{ textAlign: 'center' }}>
            <span className="text">Already have an account? </span>
            <Link href="/">
              <span className="blue-text"> Log in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}
export default SignUp;