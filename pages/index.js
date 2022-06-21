import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
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
  const { username, password } = profile;
  const router = useRouter();
  const login = () => {
    try {
      let url = "https://192.168.201.46/Intranet/User/login-user";
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
      router.push("/admin/dashboard")
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
              type="text"
              className="bg-gray-100 outline-none text-sm flex-1"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
            <MdLockOutline className="text-black m-2" />
            <input
              type="password"
              className="bg-gray-100 outline-none text-sm flex-1"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="submit"
            onClick={() => {
              login();
            }}
          >
            <FaSignInAlt />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
