import { useContext } from "react";
import { ShopContext } from "../context/ShopContext/ShopContext";
import { useParams } from "react-router-dom";
import { Products } from "../assets/all_product";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const all_products = useContext(ShopContext);
  const all_product = all_products?.all_product;
  if (all_product === undefined) return null;
  const { productId } = useParams();
  if (all_product === null) return <div>null</div>;
  const product = all_product.find((e: Products) => e.id === Number(productId));
  if (product === undefined) return <div>null</div>;
  else
    return (
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
      </div>
    );
};

export default Product;
