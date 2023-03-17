import React from "react";
import "../../static/css/custom.css";
import { Button, Table } from "reactstrap";
import { useTranslation } from "react-i18next";

function PriceList({ prices, filteredItems }) {
  const itemsToRender = filteredItems.length ? filteredItems : prices;
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
      <Table striped bordered className="table-success" responsive>
        <thead className="tableHead">
          <tr>
            <th>#</th>
            <th>Rodzaj zabiegu</th>
            <th>Cena, PLN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!itemsToRender || itemsToRender.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            itemsToRender.map((price, index) => (
              <tr key={price.pk}>
                <td>{index + 1}</td>
                <td>{price[`item_${currentLanguage}`]}</td>
                <td>{price.price_others}</td>
                <td>
                  <Button>
                    <a href="https://wirtualny-kalendarz.pl/rezerwacje-online/5d72d7ed85ec833211caec159436a6df">
                      Zamów!
                    </a>
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default PriceList;
