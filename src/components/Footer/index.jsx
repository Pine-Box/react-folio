import React from "react";
import "./style.css";
import SocialMedia from "../SocialMedia";

function Footer() {
  return (
    <footer className="d-flex flexrow flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-8 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        <SocialMedia />
      </div>
    </footer>
  );
}
export default Footer;