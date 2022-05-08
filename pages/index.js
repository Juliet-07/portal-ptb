import Head from "next/head";
import Link from "next/link";
import { FaRegEnvelope, FaSignInAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Home = () => {
  return (
    <div className="ptbPortalHome">
      <Head>
        <title>PremiumTrust Bank</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>
        <span>P</span>remium
        <span>T</span>rust
        <span>B</span>ank
      </h1>
      {/* content */}
      <div className="sub-main-w3">
        <form>
          <p className="legend">Welcome</p>
          <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
            <FaRegEnvelope className="text-black m-2" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div>
          <div className=" w-100 bg-red-100 p-2 flex items-center mb-3">
            <MdLockOutline className="text-black m-2" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div>
          <Link href="/admin/dashboard">
            <button type="submit" className="submit">
              <FaSignInAlt />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Home;
