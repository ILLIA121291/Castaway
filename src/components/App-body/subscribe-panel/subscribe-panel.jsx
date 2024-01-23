import BlueButton from '../../App-general-components/Blue-button/blue-button';
import './subscribe-panel.css';

function SubscribePanel() {
  return (
    <section className="app_body_subsribe_panel">
      <img src="/subscribe_panel.svg" alt="" />
      <div className="app_body_subsribe_panel_part_right">
        <span>Email Newsletter</span>
        <h2>Subscribe for updates</h2>
      </div>
      <form action="" className="app_body_subsribe_panel_part_left">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <div>
          <BlueButton titel="Submit" />
        </div>
      </form>
    </section>
  );
}

export default SubscribePanel;
