import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";
import { IoMdAttach } from "react-icons/io";

const Request = () => {
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [file, setFile] = useState([]);
  const formik = useFormik({
    initialValues: {
      subject: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmit(true);
    },
    validationSchema: yup.object({
      subject: yup.string().trim().required("Subject is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });
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
      <div className="col-lg-6 col-md-12 mt-20 ml-80 card">
        <div hidden={!submit} className="alert alert-success" role="alert">
          {message}
        </div>
        <div className="card-header card-header-danger">
          <h4 className="card-title">Make Request Here</h4>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
              {formik.errors.subject && (
                <div className="text-danger">{formik.errors.subject}</div>
              )}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control mb-3"
                placeholder="Enter your Message"
                cols="20"
                rows="10"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
              {formik.errors.message && (
                <div className="text-danger">{formik.errors.message}</div>
              )}
            </div>
            <div className="mt-5 mb-3">
              {/* <label htmlFor="file" className="form-label">
                <IoMdAttach />
              </label> */}
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={setFile}
                multiple
              />
            </div>
            <Link href="/admin/eApproval/upload">
            <button className="btn btn-primary mt-5" type="submit">
              send
            </button>
            </Link>
            <Link href="/admin/dashboard">
              <button className="btn btn-danger pull-right mt-5" type="submit">
                Cancel
              </button>
            </Link>
          </form>
          <div>
            {/* Automatically takes the file to next page */}
            {/* <Link href="/admin/eApproval/upload">
              <button className="btn btn-primary mt-5" type="submit">
                Add Files
              </button>
            </Link>
            <Link href="/admin/dashboard">
              <button className="btn btn-danger pull-right mt-5" type="submit">
                Cancel
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Request;
