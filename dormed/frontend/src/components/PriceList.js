import React, { Component } from "react";
import { Table } from "reactstrap";

class PriceList extends Component {
  render() {
    const prices = this.props.prices;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            
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
                <td>{price.description}</td>
                <td>{price.price}</td>              
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PriceList;