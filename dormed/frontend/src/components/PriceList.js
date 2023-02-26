import React, { Component } from "react";
import '../../static/css/custom.css'
import { Table } from "reactstrap";

class PriceList extends Component {
  render() {
    const prices = this.props.prices;
    return (
      <Table striped bordered className="table-success" responsive >
        <thead className="tableHead" >
          <tr>
            <th>Rodzaj zabiegu</th>
            <th>Cena dla mieszkańców Willi Dorotka i Dormed Medical SPA</th>
            <th>Cena dla klientów z zewnątrz</th>
            
          </tr>
        </thead>
        <tbody>
          {!prices || prices.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            prices.map(price => (
              <tr key={price.pk}>
                <td>{price.item}</td>
                <td>{price.price_dormed}</td>
                <td>{price.price_others}</td>              
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PriceList;