import './squares-list-item.css';
import Stars from './stars/stars';


function SquaresListItem({titel, authour}) {
  return (
    <a href="#" className="app_body_squares_list_item">
      <Stars />
      <h3 className="app_body_squares_list_item_title">{titel}</h3>
      <h4 className="app_body_squares_list_item_authour">{authour}</h4>
    </a>
  );
}

export default SquaresListItem;
