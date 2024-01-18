import './menu_panel.css';

function MenuPanel() {
  return (
    <div className="menu_panel">
      <div className="menu_panel_log">
        <img src="/logo.svg" alt="logo" />
      </div>
      <nav className="menu_panel_menu">
        <a href="#" className="menu_panel_menu_a">
          Home
        </a>
        <a href="#" className="menu_panel_menu_a">
          Episodes
        </a>
        <a href="#" className="menu_panel_menu_a">
          About
        </a>
        <a href="#" className="menu_panel_menu_a">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default MenuPanel;
