import React from "react";
import SocialLinks from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="container">
        <div class="row">
          <div className="col-md-2">
            <SocialLinks styleClass="footer-links"></SocialLinks>
          </div>
          {/*  <div class="col-md-5 footer-col">
            <ul class="list-inline">
              <li>
                <a href="proyectos.html">Nuestro trabajo.</a>
                <hr />
              </li>
              <li>
                <a href="servicios.html">Nuestros servicios.</a>
                <hr />
              </li>
              <li>
                <a href="nosotros.html">Nosotros.</a>
                <hr />
              </li>
            </ul>
          </div>
          <div class="col-md-5 footer-col">
            <ul class="list-inline">
              <li>
                <a
                  href="https://www.instagram.com/wearesyngular/"
                  target="blank"
                >
                  Instagram
                </a>
                <hr />
              </li>
              <li>
                <a href="https://bit.ly/2UrCrCN" target="blank">
                  WhatsApp
                </a>
                <hr />
              </li>
              <li>
                <a href="mailto:consultor@syngular.co">Correo eléctronico</a>
                <hr />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
