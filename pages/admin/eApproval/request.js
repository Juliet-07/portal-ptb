import React from "react";
import Head from "next/head";
import Link from "next/link";

const Request = () => {
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
        <div className="card-header card-header-danger">
          <h4 className="card-title">Make Request Here</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                required
                //   minlength="10"
                //   maxlength="20"
                className="form-control"
                placeholder="Subject"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <textarea
                className="form-control"
                cols="20"
                rows="10"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <input type="file" class="form-control-file" />
          </form>
          <div>
              {/* Automatically takes the file to next page */}
            <Link href="/admin/eApproval/upload">
              <button className="btn btn-primary mt-5" type="submit">
                Add Files
              </button>
            </Link>
            <Link href="/admin/dashboard">
              <button className="btn btn-danger pull-right mt-5" type="submit">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Request;
