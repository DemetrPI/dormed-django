import React from "react";
import { Button, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function PriceList({ prices, filteredItems, selectedCategory }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const filteredByCategory = selectedCategory
    ? prices.filter((price) => price.category === selectedCategory.value)
    : prices;

  const itemsToRender = filteredItems.length ? filteredItems : filteredByCategory;

  return (
    <div>
      <Table striped bordered responsive>
        <thead className="tableHead">
          <tr>
            <th>#</th>
            <th><Trans i18nKey="TableItems">Rodzaj zabiegu</Trans></th>
            <th><Trans i18nKey="ItemPrice">Cena, PLN</Trans></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!itemsToRender || itemsToRender.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b><Trans i18nKey="Ops, no one here yet">Ops, no one here yet</Trans></b>
              </td>
            </tr>
          ) : (
            itemsToRender.map((price, index) => (
              <tr key={price.pk}>
                <td>{index + 1}</td>
                <td>{price[`position_${currentLanguage}`]}</td>
                <td>{price.price}</td>
                <td>
                  <Button>
                    <a href="https://wirtualny-kalendarz.pl/rezerwacje-online/5d72d7ed85ec833211caec159436a6df">
                      <Trans i18nKey="order">Zamów!</Trans>
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
