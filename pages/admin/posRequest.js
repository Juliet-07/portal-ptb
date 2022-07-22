import React, { useState, useEffect } from "react";
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
  const initialValues = {
    nameOfmerchant: "",
    rcNumber: "",
    tradingName: "",
    tradingAddress: "",
    businessSegment: "",
    primaryContactName: "",
    secondaryContactName: "",
    primaryContactDesignation: "",
    secondaryContactDesignation: "",
    primaryContactMobileNumber: "",
    secondaryContactMobileNumber: "",
    primaryContactEmail: "",
    secondaryContactEmail: "",
    productDescription: "",
    posTerminalQuantity: "",
    locationOfTerminal: "",
    contactPersonForTerminal: "",
    contactPersonPhoneNumber: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
    emailAddress: "",
  };
  const [merchant, setMerchant] = useState(initialValues);
  const {
    nameOfmerchant,
    rcNumber,
    tradingName,
    tradingAddress,
    businessSegment,
    primaryContactName,
    secondaryContactName,
    primaryContactDesignation,
    secondaryContactDesignation,
    primaryContactMobileNumber,
    secondaryContactMobileNumber,
    primaryContactEmail,
    secondaryContactEmail,
    productDescription,
    posTerminalQuantity,
    locationOfTerminal,
    contactPersonForTerminal,
    contactPersonPhoneNumber,
    accountName,
    accountNumber,
    accountType,
    emailAddress,
  } = merchant;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMerchant({ ...merchant, [name]: value });
  };
  const merchantFunction = () => {
    try {
      let url =
        "https://192.168.201.46/Intranet/Requisition/create-pos-request";
      fetch(url, {
        method: "POST",
        mode:"no-cors",
        body: JSON.stringify({
          nameOfmerchant: merchant.nameOfmerchant,
          rcNumber: merchant.rcNumber,
          tradingName: merchant.tradingName,
          tradingAddress: merchant.tradingAddress,
          businessSegment: merchant.businessSegment,
          primaryContactName: merchant.primaryContactName,
          secondaryContactName: merchant.secondaryContactName,
          primaryContactDesignation: merchant.primaryContactDesignation,
          secondaryContactDesignation: merchant.secondaryContactDesignation,
          primaryContactMobileNumber: merchant.primaryContactMobileNumber,
          secondaryContactMobileNumber: merchant.secondaryContactMobileNumber,
          primaryContactEmail: merchant.primaryContactEmail,
          secondaryContactEmail: merchant.secondaryContactEmail,
          productDescription: merchant.productDescription,
          posTerminalQuantity: merchant.posTerminalQuantity,
          locationOfTerminal: merchant.locationOfTerminal,
          contactPersonForTerminal: merchant.contactPersonForTerminal,
          contactPersonPhoneNumber: merchant.contactPersonPhoneNumber,
          accountName: merchant.accountName,
          accountNumber: merchant.accountNumber,
          accountType: merchant.accountType,
          emailAddress: merchant.emailAddress,
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
        {/* Sidebar Ends*/}
        <div className="main-panel">
          <div className="content mt-0">
            <div className="container-fluid">
              <div className="flex justify-center align-middle mb-10 mt-4">
                <h3 className="font-bold text-3xl">
                  MERCHANT REGISTRATION FORM
                </h3>
              </div>
              <div className="card">
                <form className="col-lg-6 col-md-12 mt-5 mb-5 left-96">
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
                                  <input
                                    id="name"
                                    type="text"
                                    name="nameOfmerchant"
                                    value={nameOfmerchant}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor="name">
                                    Name of Merchant/Company:
                                  </label>
                                </div>
                                <div className="input-field col s6">
                                  <input
                                    id="rcNumber"
                                    type="text"
                                    name="rcNumber"
                                    value={rcNumber}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor="rcNumber">RC Number:</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s6">
                                  <input
                                    id="trade"
                                    type="text"
                                    name="tradingName"
                                    value={tradingName}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor="trade">Trading Name:</label>
                                </div>
                                <div className="input-field col s6">
                                  <input
                                    id="trade"
                                    type="text"
                                    name="tradingAddress"
                                    value={tradingAddress}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor="trade">
                                    Trading Address:
                                  </label>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm">
                                  Business Segment/Industry (Tick as
                                  appropriate)
                                </p>
                              </div>
                              <hr />
                              <div className="form-check form-check-inline mt-3">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Stores & Supermarket</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Embassy</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Bookshop</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Club/bar</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Hospitals</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Legal Services</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Fast Food</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Jewelry</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Logistics/Courier</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Boutique</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Salon</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Hotel/Guest House</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Bureau de Change</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Security Services</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Airlines</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Catering Services</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Interior Decoration</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Travel Agencies</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Church /NGO</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Gym</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Telecoms</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Education/Schools</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Cyber Cafe</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Wholesaler</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Cosmetics</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Automobile Parts</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Restaurants</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Electronics</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
                                    <span>Laundry</span>
                                  </label>
                                </p>
                              </div>
                              <div className="form-check form-check-inline">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="businessSegment"
                                      value={businessSegment}
                                      onChange={handleChange}
                                    />
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
                              <input
                                id="namePri"
                                type="text"
                                name="primaryContactName"
                                value={primaryContactName}
                                onChange={handleChange}
                              />
                              <label htmlFor="namePri">
                                Name of Primary Contact:
                              </label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="nameSec"
                                type="text"
                                name="secondaryContactName"
                                value={secondaryContactName}
                                onChange={handleChange}
                              />
                              <label htmlFor="nameSec">
                                Name of Secondary Contact:
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="role1"
                                type="text"
                                name="primaryContactDesignation"
                                value={primaryContactDesignation}
                                onChange={handleChange}
                              />
                              <label htmlFor="role1">Designation:</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="role2"
                                type="text"
                                name="secondaryContactDesignation"
                                value={secondaryContactDesignation}
                                onChange={handleChange}
                              />
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
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="phone1"
                                type="text"
                                name="primaryContactMobileNumber"
                                onChange={handleChange}
                              />
                              <label htmlFor="phone1">Mobile Number:</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="phone2"
                                type="text"
                                name="secondaryContactMobileNumber"
                                value={secondaryContactMobileNumber}
                                onChange={handleChange}
                              />
                              <label htmlFor="phone2">Mobile Number:</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="phone1"
                                type="text"
                                name="primaryContactEmail"
                                value={primaryContactEmail}
                                onChange={handleChange}
                              />
                              <label htmlFor="phone1">Email Address:</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="phone2"
                                type="text"
                                name="secondaryContactEmail"
                                value={secondaryContactEmail}
                                onChange={handleChange}
                              />
                              <label htmlFor="phone2">Email Address:</label>
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
                                <input
                                  id="describe"
                                  type="text"
                                  name="productDescription"
                                  value={productDescription}
                                  onChange={handleChange}
                                />
                                <label htmlFor="describe">
                                  Product Description
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s6">
                                <input
                                  id="terminalNo"
                                  type="text"
                                  name="posTerminalQuantity"
                                  value={posTerminalQuantity}
                                  onChange={handleChange}
                                />
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
                              <input
                                id="location"
                                type="text"
                                name="locationOfTerminal"
                                value={locationOfTerminal}
                                onChange={handleChange}
                              />
                              <label htmlFor="location">
                                Location of Terminal
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="terminalPersonnel"
                                type="text"
                                name="contactPersonForTerminal"
                                value={contactPersonForTerminal}
                                onChange={handleChange}
                              />
                              <label htmlFor="terminalNo">
                                Terminal Personnel
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="phone3"
                                type="text"
                                name="contactPersonPhoneNumber"
                                value={contactPersonPhoneNumber}
                                onChange={handleChange}
                              />
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
                              <input
                                id="accountName"
                                type="text"
                                name="accountName"
                                value={accountName}
                                onChange={handleChange}
                              />
                              <label htmlFor="accountName">Account Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="accountNumber"
                                type="text"
                                name="accountNumber"
                                value={accountNumber}
                                onChange={handleChange}
                              />
                              <label htmlFor="accountNumber">
                                Account Number
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="accountName"
                                type="text"
                                name="accountType"
                                value={accountType}
                                onChange={handleChange}
                              />
                              <label htmlFor="accountType">Account Type</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="email"
                                type="email"
                                name="emailAddress"
                                value={emailAddress}
                                onChange={handleChange}
                              />
                              <label htmlFor="email">Email Address</label>
                            </div>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <button
                      className="btn bg-success"
                      type="button"
                      name="merchantFunction"
                      onClick={() => {
                        console.log("checking...");
                        merchantFunction();
                      }}
                    >
                      Submit
                      {/* <i className="material-icons right">send</i> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PosForm;
