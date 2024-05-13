const Footer = () => {
  return (
    <>
      <footer className="footer px-20 py-12 bg-satfDarkBlue text-white">
        <aside className="text-white">
          <img
            src="/assets/images/satf-lastest-logo.png"
            className="max-w-md"
          />
          <p className="text-white">
            Sembeti Street, Plot 152 Mikocheni B,
            <br />
            P.O. Box 31552, Dar Es Salaam, Tanzania
          </p>
          <p className="text-white">+255 22 2780054</p>
          <p className="text-white">info@satf.or.tz</p>
        </aside>
        <nav>
          <h6 className="footer-title">Site Map</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Partners</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-[#15191e] text-gray-200">
        <aside>
          <p>Copyright © 2024 - All right reserved by SATF</p>
        </aside>
      </div>
    </>
  );
}

export default Footer;
