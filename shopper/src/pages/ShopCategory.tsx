import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import "./CSS/ShopCategory.css";
interface Props {
  banner: string;
  category: string;
}

const ShopCategory = (props: Props) => {
  const all_products = useContext(ShopContext);
  const all_product = all_products?.all_product;
  if (all_product === null) return null;
  if (all_product === undefined) return null;

  return (
    <div className="shop-category">
      <Image className="shopcategory-banner" src={props.banner} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
      </div>
      <div className="shopcategory-sort">
        Sort by <Image src={dropdown_icon} />
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
