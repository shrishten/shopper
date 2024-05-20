import { Link } from "react-router-dom";
import "./Item.css";
interface Props {
  id: number;
  name: string;
  image: JSX.Element;
  new_price: number;
  old_price: number;
}
const Item = (props: Props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;