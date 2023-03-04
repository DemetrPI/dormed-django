import React, { Component } from "react";
import "../../static/css/custom.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "reactstrap";

class ProgramList extends Component {
  render() {
    const programs = this.props.programs;
    return (
      <div>
        {!programs || programs.length <= 0 ? (
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>
                <h3 className="">Ops, no one here yet</h3>
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          programs.map((program) => (
            <div key={program.pk}>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h3 className="">{program.title}</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4> {program.description}</h4>
                    <p>{program.results}</p>
                    <Button ><a href="https://wirtualny-kalendarz.pl/rezerwacje-online/5d72d7ed85ec833211caec159436a6df">Go to order!</a></Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ProgramList;
