import './menu.css';

function Menu({ menuClass, linkClass }) {
  return (
    <nav className={menuClass}>
      <a href="#" className={'menu_links ' + linkClass}>
        Home
      </a>
      <a href="#" className={'menu_links ' + linkClass}>
        Episodes
      </a>
      <a href="#" className={'menu_links ' + linkClass}>
        About
      </a>
      <a href="#" className={'menu_links ' + linkClass}>
        Contact
      </a>
    </nav>
  );
}

export default Menu;
