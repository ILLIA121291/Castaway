import Menu from '../../App-general-components/Menu/menu';
import './menu_panel.css';

function MenuPanel() {
  return (
    <div className="menu_panel">
      <div className="menu_panel_log">
        <img src="/logo.svg" alt="logo" />
      </div>
      <Menu menuClass="menu_header" linkClass="menu_header_links" />
    </div>
  );
}

export default MenuPanel;
