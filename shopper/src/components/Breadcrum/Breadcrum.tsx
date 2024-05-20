import { Products } from "../../assets/all_product";
import arrow_icon from "../../assets/breadcrum_arrow.png";
import "./Breadcrum.css";
interface Product {
  product: Products;
}
const Breadcrum = (props: Product) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} />
      {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  );
};

export default Breadcrum;
