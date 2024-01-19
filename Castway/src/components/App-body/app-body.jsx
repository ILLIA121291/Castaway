import './app-body.css';
import JacobPaulaner from './jacob-paulaner/jacob-paulaner';
import LatestEpisodes from './latest-episodes/latest-episodes';
import SquaresList from './squares-list/squares-list';
import SubscribePanel from './subscribe-panel/subscribe-panel';

function AppBody({ data, squares }) {
  return (
    <main className="app_body">
      <LatestEpisodes data={data} />
      <JacobPaulaner/>
      <SubscribePanel/>
      <SquaresList squares={squares}/>
    </main>
  );
}

export default AppBody;
