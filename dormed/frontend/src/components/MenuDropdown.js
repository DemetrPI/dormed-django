import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Regulamin from "./Regulamin";
import ColorThemeSwitcher from './ThemeSwitcher';
import LanguageChanger from './LanguageChanger';

function DropdownImplExample() {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownImplExample;