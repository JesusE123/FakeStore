import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchContext } from "@/context/searchContext";

function Search() {
  const { data, dispatch } = useContext(SearchContext);
  const handleChange = (e: any) => {
    const type = e.target.value;
    dispatch({ type: "FILTER_DATA", query: type });
  };

  return (
    <div>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" className="font-bold">
          Buscar por titulo de producto
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
