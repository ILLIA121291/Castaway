import BlueButton from '../../App-general-components/Blue-button/blue-button';
import LatestEpisodesListItem from './latest-episodes-list-item/latest-episodes-list-item';
import './latest-episodes.css';

function LatestEpisodes({ data }) {
  const element = data.map(value => {
    const { id, ...itemProps } = { ...value };
    return <LatestEpisodesListItem key={id} {...value} />;
  });

  return (
    <section className="app_body_latest_episodes">
      <div className="app_body_latest_episodes_header">
        <p className="app_body_latest_episodes_header_titel">Latest episodes</p>
        <BlueButton titel="View all episodes" />
      </div>
      <ul className="app_body_latest_episodes_list">{element}</ul>
    </section>
  );
}

export default LatestEpisodes;
