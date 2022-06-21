import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  MdDashboard,
  MdPerson,
  MdSavedSearch,
  MdQuestionAnswer,
  MdOutlineApproval,
} from "react-icons/md";
import { BsCart4, BsFillPieChartFill } from "react-icons/bs";
import { FaJournalWhills, FaPeopleArrows } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { SiFormstack } from "react-icons/si";
import { GiBookmark } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";

const Requisition = () => {
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
                <a className="nav-link" href="./report.html">
                  <i className="material-icons">
                    <RiCustomerService2Line />
                  </i>
                  <p>Customer Service</p>
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
              <Link href="/admin/eApproval/request">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <MdOutlineApproval />
                    </i>
                    <p>E-approval</p>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  <i className="material-icons">
                    <FaPeopleArrows />
                  </i>
                  <p>Employee Connect</p>
                </a>
              </li>
              <Link href="/admin/enquiries">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <MdQuestionAnswer />
                    </i>
                    <p>Enquiries</p>
                  </a>
                </li>
              </Link>
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
                    <BsFillPieChartFill />
                  </i>
                  <p>Performance Evaluation</p>
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
              <Link href="/admin/requisition">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i className="material-icons">
                      <BsCart4 />
                    </i>
                    <p>Requisitions</p>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="./report.html">
                  <i className="material-icons">
                    <GrUserSettings />
                  </i>
                  <p>Transaction Processing</p>
                </a>
              </li>
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
          <div className="content mt-0">
            <div className="container-fluid">
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Requisitions</h4>
                  </div>
                  <div className="card-body">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Address Verification
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          Admin e-store
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Application Request Portal
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Assest Valuation Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Business Name Registration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Call-card Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Cheque Book Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Credit Document Deferral
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Document Deferral
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Instant Pin
                        </a>
                      </li>
                      <Link href="/admin/posRequest">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            POS/mCash/Master Pass Request
                          </a>
                        </li>
                      </Link>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Retail Loan Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Stamp Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Statement Printing Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Ticket Request
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          User Access Portal
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Video Conference Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Requisition;
