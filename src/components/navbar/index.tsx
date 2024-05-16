const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <img src="/assets/images/satf-lastest-logo.png" className="w-28" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-semibold">ABOUT</summary>
              <ul className="p-2 bg-white w-36">
                <li>
                  <a href="/whoweare">WHO WE ARE</a>
                </li>
                <li>
                  <a href="/whatguidesus">WHAT GUIDES US</a>
                </li>
                <li>
                  <a href="/ourapproach">OUR APPROACH</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-semibold">PROGRAMS</summary>
              <ul className="p-2 bg-white w-36">
                <li>
                  <a href="/educationsupport">EDUCATION SUPPORT</a>
                </li>
                <li>
                  <a href="/healthsupport">HEALTH SUPPORT</a>
                </li>
                <li>
                  <a href="/specialsupport">SPECIAL SUPPORT</a>
                </li>
                <li>
                  <a href="/householdempowerment">
                    HOUSEHOLD ECONOMIC EMPOWERMENT
                  </a>
                </li>
                <li>
                  <a href="/childprotection">CHILD PROTECTION AND ADVOCACY</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="font-semibold">PUBLICATION</a>
          </li>
          <li>
            <details>
              <summary className="font-semibold">GET INVOLVED</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a href="/donate">DONATE</a>
                </li>
                <li>
                  <a href="/partnerwithus">PARTNER WITH US</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/contact" className="font-semibold">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
