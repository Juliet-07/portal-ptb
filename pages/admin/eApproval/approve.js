import React from "react";
import Head from "next/head";
import Link from "next/link";

const Approve = () => {
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
      <div className="mt-20 ml-30">
        <div className="container card">
          <div className="card-header card-header-danger">
            <h4 className="card-title">eApproval Coversheet</h4>
          </div>
          <div className="card-body">
            <p>
              Choose an appropriate signing statement to appear on the cover
              sheet:
            </p>
            {/* checkboxes */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <form>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Tax Return Approval</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" checked="checked" />
                    <span>HMO Approval</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Generic Approval</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Custom Approval</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>I.T Approval</span>
                  </label>
                </p>
                  <Link href="/admin/eApproval/confirm">
                    <button className="btn btn-primary mt-5" type="submit">
                      Request Approval
                    </button>
                  </Link>
                  <Link href="/admin/dashboard">
                    <button
                      className="btn btn-danger pull-right mt-5"
                      type="submit"
                    >
                      Cancel
                    </button>
                  </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Approve;
