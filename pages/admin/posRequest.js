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

const PosForm = () => {
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
              <div className="flex justify-center align-middle mb-10 mt-4">
                <h3 className="font-bold text-3xl">
                  MERCHANT REGISTRATION FORM
                </h3>
              </div>
              {/* <div className="col-lg-6 col-md-12 mt-5 left-96"> */}
              <form className="col-lg-6 col-md-12 mt-5 left-96">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Merchant Information
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col s12">
                            <div className="row">
                              <div className="input-field col s6">
                                <input id="name" type="text" />
                                <label htmlFor="name">
                                  Name of Merchant/Company:
                                </label>
                              </div>
                              <div className="input-field col s6">
                                <input id="rcNumber" type="text" />
                                <label htmlFor="rcNumber">RC Number:</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s6">
                                <input id="trade" type="text" />
                                <label htmlFor="trade">
                                  Trading Name & Address:
                                </label>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm">
                                Business Segment/Industry (Tick as appropriate)
                              </p>
                            </div>
                            <hr />
                            <div className="form-check form-check-inline mt-3">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Stores & Supermarket</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Embassy</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Bookshop</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Club/bar</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Hospitals</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Legal Services</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Fast Food</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Jewelry</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Logistics/Courier</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Boutique</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Salon</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Hotel/Guest House</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Bureau de Change</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Security Services</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Airlines</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Catering Services</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Interior Decoration</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Travel Agencies</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Church /NGO</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Gym</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Telecoms</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Education/Schools</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Cyber Cafe</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Wholesaler</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Cosmetics</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Automobile Parts</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Restaurants</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Electronics</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Laundry</span>
                                </label>
                              </p>
                            </div>
                            <div className="form-check form-check-inline">
                              <p>
                                <label>
                                  <input type="checkbox" />
                                  <span>Fuel Stations</span>
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Contact Information
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* <form> */}
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="namePri" type="text" />
                            <label htmlFor="namePri">
                              Name of Primary Contact:
                            </label>
                          </div>
                          <div className="input-field col s6">
                            <input id="nameSec" type="text" />
                            <label htmlFor="nameSec">
                              Name of Secondary Contact:
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="role1" type="text" />
                            <label htmlFor="role1">Designation:</label>
                          </div>
                          <div className="input-field col s6">
                            <input id="role2" type="text" />
                            <label htmlFor="role2">Designation:</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="phone1" type="text" />
                            <label htmlFor="phone1">
                              Office Telephone/ Extension:
                            </label>
                          </div>
                          <div className="input-field col s6">
                            <input id="phone2" type="text" />
                            <label htmlFor="phone2">
                              Office Telephone/ Extension::
                            </label>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Business Information
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          {/* <form className="col s12"> */}
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="describe" type="text" />
                              <label fhtmlForor="describe">
                                Product Description
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="terminalNo" type="text" />
                              <label htmlFor="terminalNo">
                                POS Terminal Number
                              </label>
                            </div>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      POS Terminal Information
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        {/* <form className="col s12"> */}
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="location" type="text" />
                            <label htmlFor="location">
                              Location of Terminal
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="terminalPersonnel" type="text" />
                            <label htmlFor="terminalNo">
                              Terminal Personnel
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="phone3" type="text" />
                            <label htmlFor="phone3">Phone Number</label>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bank Account Information
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        {/* <form className="col s12"> */}
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="accountName" type="text" />
                            <label htmlFor="accountName">Account Name</label>
                          </div>
                          <div className="input-field col s6">
                            <input id="accountNumber" type="text" />
                            <label htmlFor="accountNumber">
                              Account Number
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="accountName" type="text" />
                            <label htmlFor="accountType">Account Type</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="email" type="email" />
                            <label htmlFor="email">Email Address</label>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn bg-primary" type="submit" name="action">
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};
export default PosForm;
