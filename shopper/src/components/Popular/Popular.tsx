import "./Popular.css";
import data_product from "../../assets/data.ts";
import Item from "../Item/Item.tsx";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />

      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
