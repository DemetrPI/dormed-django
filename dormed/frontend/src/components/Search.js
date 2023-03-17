import React, { useState } from "react";
import "../../static/css/search.css";
import {Form, FormGroup, Input} from "reactstrap";
import { Trans, useTranslation } from "react-i18next";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <Form className="mt-3, ps-2">
      <FormGroup>
          <Input  type="text"
        placeholder={t('Type here to search service...')}
        value={query}
        onChange={handleInputChange} />
      </FormGroup>
      </Form>
    </div>
  );
}

export default Search;
