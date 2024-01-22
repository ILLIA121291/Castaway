import BlueButton from '../../../App-general-components/Blue-button/blue-button';
import './latest-episodes-list-item.css';

function LatestEpisodesListItem({ image, episode, titel, text, tag }) {
  return (
    <li className="latest_episodes_list_item">
      <div className="latest_episodes_list_item_image">
        <img src={image} alt="IMAGE_1" />
      </div>
      <div className="latest_episodes_list_item_description">
        <div className="latest_episodes_list_item_description_tags">
          <p>{tag}</p>
        </div>
        <p className="latest_episodes_list_item_description_episode">
          Episode {episode}
        </p>
        <title className="latest_episodes_list_item_description_titel">
          {titel}
        </title>
        <p className="latest_episodes_list_item_description_text">{text}</p>
        <div>
          <BlueButton titel="View Episode Details" />
        </div>
      </div>
    </li>
  );
}

export default LatestEpisodesListItem;
