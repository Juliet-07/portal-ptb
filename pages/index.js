import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaRegEnvelope, FaSignInAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Home = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [profile, setProfile] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const login = () => {
    try {
      let url = "https://192.168.201.46/Intranet/User/login-user";
      console.log(url);
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: profile.username,
          password: profile.password,
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

  useEffect(() => {});

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
            />
          </div>
          <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
            <MdLockOutline className="text-black m-2" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-gray-100 outline-none text-sm flex-1"
              onChange={handleChange}
            />
          </div>
          <Link href="/admin/dashboard">
            <a
              type="submit"
              className="submit"
              onClick={() => {
                login();
              }}
            >
              <FaSignInAlt />
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Home;
