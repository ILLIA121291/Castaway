import './app-header.css';
import HeaderBody from './header-body/header-body';
import Menu from './menu_panel/menu/menu';
import MenuPanel from './menu_panel/menu_panel';

function AppHeader() {
  return (
    <header className="app_header">
      <MenuPanel />
      <HeaderBody />
    </header>
  );
}

export default AppHeader;
