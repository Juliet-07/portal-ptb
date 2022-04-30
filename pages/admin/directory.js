import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdDashboard, MdPerson, MdSavedSearch } from "react-icons/md";
import { BsChatDots, BsCart4, BsFillPieChartFill } from "react-icons/bs";
import { FaJournalWhills, FaPeopleArrows } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { SiFormstack } from "react-icons/si";
import { GiBookmark } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const Directories = () => {
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
        {/* Sidebar */}
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
              <Link href="/admin/dashboard">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <MdDashboard />
                    </i>
                    <p>Overview</p>
                  </a>
                </li>
              </Link>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <FaJournalWhills />
                  </i>
                  <p>Directories</p>
                </a>
              </li>
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
                <a className="nav-link" href="#">
                  <i className="material-icons">
                    <FaPeopleArrows />
                  </i>
                  <p>Employee Connect</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">report</i>
                  <p>Customer Service</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
        {/* Sidebar */}
        <div className="main-panel">
          {/* Navbar Starts */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid ">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="#">
                  DIRECTORY
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar Ends */}
          <div className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header card-header-danger">
                  <h4 className="card-title">
                    Table list of all registered employees
                  </h4>
                </div>
                <div className="card-body table-responsive">
                  {/* <!-- <h1>Table here</h1> --> */}
                  <table className="table table-hover">
                    <thead className="text-default">
                      <th>#</th>
                      <th>Branch</th>
                      <th>Sort Codes</th>
                      <th>ATM Locations</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td> Head Office</td>
                        <td>105150007</td>
                        <td>None</td>
                      </tr>
                      {/* <!-- Next --> */}
                      <tr>
                        <td>2</td>
                        <td>Head Office Branch (Adeola Hopewell V.I)</td>
                        <td>105150013</td>
                        <td>Head Office Branch</td>
                      </tr>
                      {/* <!-- Next --> */}
                      <tr>
                        <td>3</td>
                        <td>Transamadi Port-Harcourt</td>
                        <td>105210025</td>
                        <td>Transamadi Port-Harcourt</td>
                      </tr>
                      {/* <!-- Next --> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Directories;
