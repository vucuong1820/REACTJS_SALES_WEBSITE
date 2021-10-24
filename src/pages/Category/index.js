import { getCategory , getProductCategory } from "../../services/Api";
import { getImageProduct } from "../../shared/ultils";
import React from "react";
import ProductItem from "../../shared/component/product-item";
const Category = (props) => {
  const id = props.match.params.id;
  const [category , setCategory] = React.useState([]);
  const [products , setProducts] = React.useState([]);
  const [totalProducts, setTotalProducts] = React.useState(0);
  React.useEffect(()=>{
        getCategory(id).then((res)=>{
          setCategory(res.data.data)
        });
        getProductCategory(id).then((res)=>{
          setProducts(res.data.data.docs);
          setTotalProducts(res.data.data.docs.length);
        })
  },[id])
  
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <h3>{category.name} (hiện có {totalProducts} sản phẩm)</h3>
        <div className="product-list card-deck">
          {
            products.map((product)=>{
              return(
                <ProductItem item={product}/>
              )
            })
          }
        </div>          
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Category;
