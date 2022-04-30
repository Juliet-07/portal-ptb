import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Woman from "../../assets/woman.jpg";
import { MdDashboard, MdPerson, MdSavedSearch } from "react-icons/md";
import { BsChatDots, BsCart4, BsFillPieChartFill } from "react-icons/bs";
import { FaJournalWhills, FaPeopleArrows } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { SiFormstack } from "react-icons/si";
import { GiBookmark } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const [hour, setHour] = useState(null);
  const [user, setUser] = useState("Juliet");
  useEffect(() => {
    timeGreeting();
  });
  const timeGreeting = () => {
    let date = new Date();
    let hour = date.getHours();
    setHour(hour);
  };
  return (
    <>
      <Head>
        <title>PremiumTrust Bank</title>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
      </Head>
      <div className="container-fluid">
        <div
          className="sidebar"
          data-color="danger"
          data-background-color="white"
        >
          <div className="logo">
            <a href="#" className="simple-text logo-normal">
              PremiumTrust Bank
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <MdDashboard />
                  </i>
                  <p>Overview</p>
                </a>
              </li>
              <Link href="https://premiumtrustbank.com/">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="material-icons">
                      <MdSavedSearch />
                    </i>
                    <p>About Us</p>
                  </a>
                </li>
              </Link>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <BsChatDots />
                  </i>
                  <p>Enquiries</p>
                </a>
              </li>
              <Link href="/admin/directories">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <FaJournalWhills />
                    </i>
                    <p>Directories</p>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <BsCart4 />
                  </i>
                  <p>Requisitions</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <FcOpenedFolder />
                  </i>
                  <p>Data Processing</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <SiFormstack />
                  </i>
                  <p>Forms & Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <GiBookmark />
                  </i>
                  <p>Policies & Procedure</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <BsFillPieChartFill />
                  </i>
                  <p>Performance Evaluation</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  <i className="material-icons">
                    <FaPeopleArrows />
                  </i>
                  <p>Employee Connect</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
                  <p>Customer Service</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  <i className="material-icons">
                    <GrUserSettings />
                  </i>
                  <p>Transaction Processing</p>
                </a>
              </li>
              <Link href="/admin/profile">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <MdPerson />
                    </i>
                    <p>Profile</p>
                  </a>
                </li>
              </Link>
              <Link href="/">
                <li className="nav-item shadeCyan">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <BiLogOut />
                    </i>
                    <p className="text-white">Logout</p>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Sidebar ends */}
        <main className="main-panel">
          {/* Navbar Starts */}
          <nav className="navbar navbar-expaand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid shadeRed">
              <div className="navbar-wrapper">
                <a className="navbar-brand text-3xl text-white" href="#">
                  Dashboard
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar Ends */}
          <div className="content">
            <div className="container-fluid row">
              {/* Profile Div */}
              {/* Calendar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p className="text-2xl shadeRed1">
                    {hour < 12
                      ? "Good Morning, "
                      : hour < 17
                      ? "Good Afternoon, "
                      : "Good evening, "}
                    {user}
                  </p>
                  <Image
                    src={Woman}
                    width={500}
                    height={500}
                    layout="responsive"
                    objectFit="contain"
                    alt="Picture of the author"
                    className="mt-3"
                  />
                  <div className="mt-3">
                    <p>Role:Software Engineer</p>
                    <p>Department:I.T</p>
                    <p>Branch:Head Office</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl shadeRed1">Calendar</h4>
                  <Calendar onChange={onChange} value={value} />
                </div>
              </div>
              {/* Calendar */}
              {/* Display Links */}
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Favorite Links</h4>
                  </div>
                  <div className="card-body table-responsive">
                    <table className="table table-hover">
                      {/* <thead className="text-default">
                        <th>Links</th>
                      </thead> */}
                      <tbody>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              PremiumTrust Bank
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://meetjuliet.netlify.app">
                              Portfolio
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://meetjuliet.netlify.app">
                              Portfolio
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://meetjuliet.netlify.app">
                              Portfolio
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://meetjuliet.netlify.app">
                              Portfolio
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://meetjuliet.netlify.app">
                              Portfolio
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://premiumtrustbank.com/">
                              Company Website
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Display Links */}
              {/* Whose Birthday?? */}
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Whose Birthday?</h4>
                    {/* <p class="card-category">New employees.</p> */}
                  </div>
                  <div className="card-body table-responsive">
                    <table className="table table-hover">
                      {/* <thead className="text-default">
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Phone</th>
                      </thead> */}
                      <tbody>
                        <tr>
                          {/* <td>1</td> */}
                          <td>Damon Salvathore</td>
                          {/* <td>12/09</td> */}
                          {/* <td>0814444444444</td> */}
                        </tr>
                        <tr>
                          {/* <td>2</td> */}
                          <td>Elena Gilbert</td>
                          {/* <td>13/09</td> */}
                          {/* <td>0814444444444</td> */}
                        </tr>
                        <tr>
                          {/* <td>3</td> */}
                          <td>Sage Rodriguez</td>
                          {/* <td>14/09</td> */}
                          {/* <td>0814444444444</td> */}
                        </tr>
                        <tr>
                          {/* <td>4</td> */}
                          <td>Juliet Joseph</td>
                          {/* <td>02/12</td> */}
                          {/* <td>0814444444444</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Whose Birthday... */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
