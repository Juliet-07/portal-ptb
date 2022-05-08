import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  MdDashboard,
  MdPerson,
  MdSavedSearch,
  MdOutlineApproval,
} from "react-icons/md";
import { BsChatDots, BsCart4, BsFillPieChartFill } from "react-icons/bs";
import { FaJournalWhills, FaPeopleArrows } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { SiFormstack } from "react-icons/si";
import { GiBookmark } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import Select from "react-select";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const [hour, setHour] = useState(null);
  const [user, setUser] = useState("Juliet");
  const fileTypes = [
    { value: "pdf", label: "file.pdf" },
    { value: "doc", label: "file.doc" },
    { value: "ppt", label: "file.ppt" },
  ];
  const options = [
    { value: "mike", label: "Mike Koledoye" },
    { value: "david", label: "David" },
    { value: "juliet", label: "Juliet" },
  ];
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
              <li className="nav-item">
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
              <Link href="/admin/enquiries">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <BsChatDots />
                    </i>
                    <p>Enquiries</p>
                  </a>
                </li>
              </Link>
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
              <Link href="/admin/requisition">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <BsCart4 />
                    </i>
                    <p>Requisitions</p>
                  </a>
                </li>
              </Link>
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
                  <i className="material-icons">report</i>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <MdOutlineApproval />
                  </i>
                  <p>E-approval</p>
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
                  Electronic Approval
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar Ends */}
          <div className="content">
            <div className="container-fluid">
              {/* Approval Table */}
              <div className="card">
                <div className="card-body ">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="text-danger">
                        <th>Document</th>
                        <th>Approvers</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Select
                              name="approvers"
                              options={fileTypes}
                              isMulti
                            />
                          </td>
                          <td>
                            <Select
                              name="approvers"
                              options={options}
                              isMulti
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Select
                              name="approvers"
                              options={fileTypes}
                              isMulti
                            />
                          </td>
                          <td>
                            <Select
                              name="approvers"
                              options={options}
                              isMulti
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* upload section */}
                  <div>
                    <button className="btn btn-primary mt-5" type="submit">
                      Upload
                    </button>
                    <Link href="/admin/dashboard">
                      <button
                        className="btn btn-danger pull-right mt-5"
                        type="submit"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Approval Table */}
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
