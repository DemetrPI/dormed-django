import React, { Component } from "react";
import "../../static/css/custom.css";
import Accordion from "react-bootstrap/Accordion";

class ProgramList extends Component {
  render() {
    const programs = this.props.programs;
    return (
      <div>
        {!programs || programs.length <= 0 ? (
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>
                <h3 className="text-warning">Ops, no one here yet</h3>
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
                    <h3 className="text-warning">{program.title}</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4> {program.description}</h4>
                    <p>{program.results}</p>
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
