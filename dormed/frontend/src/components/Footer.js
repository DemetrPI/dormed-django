import React from "react";
import "../../static/css/custom.css";
import dormedLogo from "../../static/images/dormed-logo.png";
import orly from "../../static/images/orly.png";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import { Trans, useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  return (
    <footer className="py-2">
      <hr className="border border-warning border-1" />
      <div className="row">
        <div className="col-12 col-md">
          <img src={dormedLogo} height={48}></img>
          <img src={orly} height={48}></img>
        </div>
        <div className="col-6 col-md text-center">
        <h5><Trans i18nKey = "address">Adres</Trans></h5>
          
          <ul className="list-unstyled text-small">
            <li className="ms-3 pulse"><Trans i18nKey="street">ul. Rokosza 5</Trans></li>
            <li className="ms-3 pulse"><Trans i18nKey="city">28-100 Busko Zdrój</Trans></li>
          </ul>
        </div>
        <div className="col-6 col-md text-center">
          <h5>{t("Recepcja")}</h5>
          <ul className="list-unstyled text-small">
            <li>
            </li>
            <li>
              <a className="ms-3 pulse" href="tel:+48600454635">
                600 45 46 35
              </a>
            </li>
            <li>
              <a className="ms-3 pulse" href="tel:+48604596473">
                604 59 64 73
              </a>
              </li>
              <li>
              <a className="ms-3 pulse" href="tel:+48413782318">
                41 378 23 18
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md text-center">
          <h5>{t("Klinika")}</h5>
          <ul className="list-unstyled text-small">
            <li>
            <a className="ms-3 pulse" href="tel:+48600454635">
                600 45 46 35
              </a>
              </li>
              <li>
              <a className="ms-3 pulse" href="tel:+48604596473">
                604 59 64 73
              </a>
            </li>
            <li>
              <a className="ms-3 pulse" href="tel:+48606430365">
                606 43 03 65
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md text-center">
          <h5>{t("Dane")}</h5>
          <ul className="list-unstyled text-small">
            <li className="ms-3 pulse">NIP: 655-104-79-57</li>
            <li className="ms-3 pulse">Regon: 292668013</li>
            <li className="ms-3 pulse">
              mBank <br /> 33114020040000310241790650
            </li>
          </ul>
        </div>
        <div className="col-6 col-md text-center">
          <h5>{t("Socials")}</h5>
          <ul className="list-unstyled">
            <li className="ms-3 pulse">
              <a href="#">
                <Instagram size={24} />
              </a>
            </li>
            <li className="ms-3 pulse">
              <a href="#">
                <Twitter size={24} />
              </a>
            </li>
            <li className="ms-3 pulse">
              <a href="#">
                <Facebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-warning border-1" />
      <div className="text-center">
        <span className="mb-3 fs-5">© 2023 Dormed</span>
      </div>
    </footer>
  );
}

export default Footer;
