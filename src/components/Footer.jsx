import React from "react";

function Footer() {
  return (
    <footer className="py-3 my-4 fixed-bottom">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/features" className="nav-link px-2 text-muted">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="/pricing" className="nav-link px-2 text-muted">
            Pricing
          </a>
        </li>
      </ul>
      <p className="text-center text-muted">© 2023 Blah Blah</p>
    </footer>
  );
}

export default Footer;
