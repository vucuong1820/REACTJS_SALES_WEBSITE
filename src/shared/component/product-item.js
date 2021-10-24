import { getImageProduct } from "../ultils";
import { Link } from "react-router-dom";
const ProductItem = ({item})=>{
    return (
        <div className="product-item card text-center">
            <Link to={`/product-details-${item._id}`}>
              <img src={getImageProduct(item.image)} />
            </Link>
            <h4>
              <Link to={`/product-details-${item._id}`}>{item.name}</Link>
            </h4>
            <p>
              Giá Bán: <span>{item.price}đ</span>
            </p>
          </div>
    )
}
export default ProductItem;