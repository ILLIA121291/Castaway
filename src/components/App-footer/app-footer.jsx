import Menu from '../App-general-components/Menu/menu';
import SocialMediaLinks from '../App-general-components/Social-Media-Links/social-media-links';
import './app-footer.css';

function AppFooter() {
  return (
    <footer className="app_footer">
      <div className="app_footer_logo">
        <div className="app_footer_logo_log">
          <img src="/image_footer/logo_footer.svg" alt="logo footer" />
        </div>
        <div className="app_footer_logo_social_media">
          <a href="#">
            <img src="/image_footer/instagram.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/image_footer/twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="/image_footer/facebook.svg" alt="facebook" />
          </a>
        </div>
      </div>
      <Menu menuClass="menu_footer" linkClass="menu_footer_links" />
      <nav className="app_footer_links">
        <a href="#">Style Guide</a>
        <a href="#">Instructions</a>
        <a href="#">Changelog</a>
        <a href="#">Credit</a>
        <a href="#">Powered by Webflow</a>
        <a href="#">Licenses</a>
      </nav>
      <SocialMediaLinks />
    </footer>
  );
}

export default AppFooter;
