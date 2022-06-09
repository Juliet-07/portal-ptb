import React, { useState, useEffect } from "react";
import Formik from "formik";
import Head from "next/head";
import Link from "next/link";
import { FaRegEnvelope, FaSignInAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Home = () => {
  const onSubmit = () => {
    try {
      fetch("https://192.168.201.46/Intranet/User/login-user", {
        method: "POST",
        body: JSON.stringify({
          username: "",
          password: "",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (err) {
      console.log(err.message);
    }
  };
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <div className="ptbPortalHome">
      <Head>
        <title>PremiumTrust Bank</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>
        <span>P</span>remium
        <span>T</span>rust
        <span>B</span>ank
      </h1>
      {/* content */}
      <div className="sub-main-w3">
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "required";
            } else if (
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = "Invalid user";
            }
            return errors;
          }}
          // onSubmit={() => {}}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form>
              <p className="legend">Welcome</p>
              <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-black m-2" />
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  onChange={handleChange}
                  value={values.username}
                />
                {errors.username && touched.username && errors.username}
              </div>
              <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
                <MdLockOutline className="text-black m-2" />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              {/* <Link href="/admin/dashboard"> */}
              <button type="submit" className="submit" onClick={onSubmit}>
                <FaSignInAlt />
              </button>
              {/* </Link> */}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Home;
