import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { MdDashboard, MdPerson } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Head>
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
          data-color="orange"
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
                  {/* <MdDashboard size={30}/> */}
                  <p>Overview</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <p>About Us</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./user.html">
                  {/* <MdPerson/> */}
                  <p>Enquiries</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./table/tables.html">
                  {/* <i className="material-icons">content_paste</i> */}
                  <p>Directories</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./user.html">
                  {/* <MdPerson/> */}
                  <p>Requisitions</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./makeadmin.html">
                  {/* <i className="material-icons">account_circle</i> */}
                  <p>Data Processing</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
                  <p>Forms & Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
                  <p>Policies & Procedure</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
                  <p>Performance Evaluation</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
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
                  {/* <i className="material-icons">report</i> */}
                  <p>Transaction Processing</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  {/* <i className="material-icons">report</i> */}
                  <p>Profile</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Sidebar ends */}
        <main className="main-panel">
          {/* Navbar Starts */}
          <nav className="navbar navbar-expaand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid bg-red-700">
              <div className="navbar-wrapper">
                <a className="navbar-brand text-3xl text-white" href="#">
                  Dashboard
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar Ends */}
          <div className="content">
            <div className="container-fluid">
              {/* Display Links */}
              <div>
                <h2 className="text-red-700 text-3xl">Favorite Links</h2>
                <div className="card">
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                  <a href="https://meetjuliet.netlify.app">link</a>
                </div>
              </div>
              {/* Display Links */}
              <div className="flex-row">
                <h4 className="text-3xl text-red-700">Calendar</h4>
                {/* <div className="bg-orange-400"> */}
                  <Calendar onChange={onChange} value={value} />
                {/* </div> */}
                {/* Whose Birthday?? */}
                <div className="col-lg-6 col-md-12 mt-5">
                  <div className="card">
                    <div className="card-header card-header-danger">
                      <h4 className="card-title">Whose Birthday?</h4>
                      {/* <p class="card-category">New employees.</p> */}
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-default">
                          <th>#</th>
                          <th>Name</th>
                          <th>Date</th>
                          {/* <th>Phone</th> */}
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Damon Salvathore</td>
                            <td>12/09</td>
                            {/* <td>0814444444444</td> */}
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Elena Gilbert</td>
                            <td>13/09</td>
                            {/* <td>0814444444444</td> */}
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>14/09</td>
                            {/* <td>0814444444444</td> */}
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Juliet Joseph</td>
                            <td>02/12</td>
                            {/* <td>0814444444444</td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
