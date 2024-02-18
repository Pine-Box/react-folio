import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  


export default function SocialMedia() {
  return (
    <div className="container d-flex flex-row justify-content-around align-items-center mt-3">
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
    </div>
  );
}