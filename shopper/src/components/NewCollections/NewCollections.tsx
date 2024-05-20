import new_collections from "../../assets/new_collections";
import Item from "../Item/Item";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollections;
