import React from "react";
import Facade from "../../frontend/static/images/facade.jpg";
import Markoni from "../../frontend/static/images/Markoni_Busko.jpg";
import Church from "../../frontend/static/images/BuskoZdrojWoodenChurch.jpg";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "reactstrap";
import Image from "react-bootstrap/Image";
import Footer from "./components/Footer";
import "../static/css/custom.css";

function About() {
  const { t } = useTranslation();
  return (
    <>
    <Container fluid>
      <Row lg="12" sm="1" md="1">
        <Col lg="4" md="12" sm="12">
          <Image src={Facade} className="leftImage" />
        </Col>
        <Col lg="8" md="12" sm="12" className="mt-3">
          <div className="aboutDescription">
            <h4 className="text-center ">
              {t(
                "Klinika Zdrowia i Urody Dormed Medical SPA dr n. med. Doroty Sagan"
              )}
            </h4>
            <p>{t("Znajduje")}</p>
          </div>
        </Col>
      </Row>
      <Row lg="12" sm="1" md="1">
        <Col
          lg={{
            order: 1,
            size: 8,
          }}
          md={{
            order: 2,
            size: 12,
          }}
          sm={{
            order: 2,
            size: 12,
          }}
          xs={{
            order: 2,
            size: 12,
          }}
        >
          <div className="aboutDescription">
            <h4>
              {t(
                "Busko-Zdrój słynie z unikalnych w kraju i Europie siarczkowych źródeł mineralnych."
              )}
            </h4>
            <p> {t("Pierwszy")}</p>
          </div>
        </Col>
        <Col
          lg={{
            order: 2,
            size: 4,
          }}
          md={{
            order: 1,
            size: 12,
          }}
          sm={{
            order: 1,
            size: 12,
          }}
          xm={{
            order: 1,
            size: 12,
          }}
        >
          <Image src={Markoni} className="rightImage" />
        </Col>
      </Row>

      <Row lg="12" sm="1" md="1">
        <Col lg="4" md="12" sm="12">
          <Image src={Church} className="leftImage" />
        </Col>
        <Col lg="8" md="12" sm="12">
          <div className="aboutDescription">
            <h4 className="text-center ">
              {t("Kościół św. Leonarda w Busku-Zdroju")}
            </h4>
            <p>{t("Świątynia")}</p>
          </div>
        </Col>
      </Row>
    </Container>
      <Footer />
      </>
  );
}

export default About;
