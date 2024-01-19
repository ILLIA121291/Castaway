import SquaresListItem from './squares-list-item/squares-list-item';
import './squares-list.css';

function SquaresList({ squares }) {
  const element = squares.map(value => {
    const { id, ...itemProps } = { ...value };
    return <SquaresListItem key={id} {...value} />;
  });

  return <section className="app_body_squares_list">{element}</section>;
}

export default SquaresList;
