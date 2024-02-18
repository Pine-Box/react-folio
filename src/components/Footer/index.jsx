import React from "react";
import "./style.css";
import SocialMedia from "../SocialMedia";

function Footer() {
  return (
    <footer className="container">
    <div className="col-12">
      <div className="row">
        <SocialMedia />
      </div>
      <div className="row ">
        <div className="container d-flex flex-row justify-content-around align-items-center mb-3">
            <span className="mt-1 text-muted">© 2024 Urban Graphic Studio Ltd</span>
        </div>
      </div>
      </div>
    </footer>
  );
}
export default Footer;