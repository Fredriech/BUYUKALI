import React from "react";
import "../static/Footer.css";
import man from "../icons/5296765_camera_instagram_instagram logo_icon (1).svg";
import time from "../icons/734399_facebook_media_online_social_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div>Feedback</div>
        <input type="text" className="input-txt" />
        <input type="submit" className="input-button" />
      </div>
      <div>Follow us on:</div>
      <div className="img-icon-box icon-box">
        <img src={man} alt="instagram" />
        <i>inspekta_freddie</i>
      </div>
      <div className="img-icon-box icon-box">
        <img src={time} alt="facebook" />
        <i>inspektaeKKo</i>
      </div>
      <div>Contact us:</div>
      <span>+255 750 742 489</span>
      <span>Dar es salaam, Tz</span>
      <span>Copyright &#169; 2024 Fredrick</span>
    </div>
  );
}

export default Footer;
