import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FcApproval } from "react-icons/fc";

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
        <div className="card">
          <div className="card-header card-header-danger">
            <h4 className="card-title">Upload File Confirmation</h4>
          </div>
          {/* */}
          <div className="card-body">
            <p style={{fontSize:16}}>eApproval Request sent successfully</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop:"5rem"
              }}
            >
              <i className="material-icons">
                <FcApproval size={100} />
              </i>
            </div>
            <Link href="/admin/dashboard">
              <button className="btn btn-primary pull-right mt-5" type="submit">
                Ok
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Approve;
