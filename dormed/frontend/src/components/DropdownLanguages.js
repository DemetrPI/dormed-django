import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function DropdownLanguages() {
  return (
    <Dropdown>
      <Dropdown.Toggle className='justify-content-end regulamin pulse' id="dropdown">
      JĘZYK
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='pulse'>Polska</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='pulse'>English</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='pulse'>Ukrainian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownLanguages;