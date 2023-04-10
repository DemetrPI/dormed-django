import "../../static/css/custom.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import dormedLogo from "../../static/images/dormed-logo.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs="12" md="auto" className="text-center mb-3 mb-md-0">
          <img src={dormedLogo} className="rotate headerImage" />
          </Col>
          <Col xs="12" md="auto">
            <nav className="pt-2">
              <span className="h5">{t("Recepcja")}</span>
              <a className="ms-3 pulse" href="tel:+48600454635">
                600 45 46 35
              </a>
              <a className="ms-3 pulse" href="tel:+48604596473">
                604 59 64 73
              </a>
              <a className="ms-3 pulse " href="tel:+48413782318">
                41 378 23 18
              </a>
            </nav>
            <nav className="pt-2">
              <span className="h5">{t("Klinika")}</span>
              <a className="ms-3 pulse" href="tel:+48604596473">
                604 59 64 73
              </a>
              <a className="ms-3 pulse" href="tel:+48604596473">
                604 59 64 73
              </a>
              <a className="ms-3 pulse" href="tel:+48606430365">
                606 43 03 65
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
        <hr className="border border-warning border-1 mt-0 mb-0" />
    </div>
  );
}

export default Hero;






// import "../../static/css/custom.css";
// import React from "react";
// import {useTranslation } from "react-i18next";
// import dormedLogo from "../../static/images/dormed-logo.png";

// function Hero() {
//   const { t } = useTranslation();
//   return (
//     <div className="hero">
//       <div className="row ">
//         <div className="col-3">
//           <img src={dormedLogo} height={64} className="rotate ms-4" />
//         </div>
//         <div className="col-9">
//           <nav className="pt-2">
//             <span className="h5">{t("Recepcja")}</span>
//             <a className="ms-3 pulse" href="tel:+48600454635">
//               600 45 46 35
//             </a>
//             <a className="ms-3 pulse" href="tel:+48604596473">
//               604 59 64 73
//             </a>
//             <a className="ms-3 pulse " href="tel:+48413782318">
//               41 378 23 18
//             </a>
//           </nav>
//           <nav className="pt-2">
//             <span className="h5">{t("Klinika")} </span>
//             <a className="ms-3 pulse" href="tel:+48604596473">
//               604 59 64 73
//             </a>
//             <a className="ms-3 pulse" href="tel:+48604596473">
//               604 59 64 73
//             </a>
//             <a className="ms-3 pulse" href="tel:+48606430365">
//               606 43 03 65
//             </a>
//           </nav>
//         </div>
//         <hr className="border border-warning border-1" />
//       </div>
//     </div>
//   );
// }

// export default Hero;
